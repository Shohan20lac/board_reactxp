import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const actions = [
  {
    text: "New Task",
    icon: require("./assets/digicurr.png"),
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    icon: require("./assets/favicon.png"),
    name: "bt_room",
    position: 3
  }
];

function NotesScreen () {
  const [notes, setNotes] = useState([])
  
  return (
    <View style={styles.routeContainer}>
      <Text> </Text>
    </View>
  );
}

function TasksScreen () {
  const [tasks, setTasks] = useState([])
  
  return (
    <View style={styles.routeContainer}>
      <Text> </Text>
    </View>
  );
}

function WalletScreen () {
  const [wallet, setWallet] = useState([])
  
  return (
    <View style={styles.routeContainer}>
      <Text> </Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarText: {
    color: '#222',
  },
  tabBarTextFocused: {
    color: '#673ab7',
  },
  routeContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});
