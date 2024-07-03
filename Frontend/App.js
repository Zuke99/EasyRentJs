import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/store';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chats from './src/screens/Chats';
import Post from './src/screens/Post';
import MyAds from './src/screens/MyAds';
import Profile from './src/screens/Profile';
import Colors from './src/Colors';
import Price from './src/screens/Price';
import PostDetails from './src/screens/PostDetails';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function PostStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PostScreen" component={Post} />
        <Stack.Screen name="Price" component={Price} />
      </Stack.Navigator>
    );
  }

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    );
  }

  function ChatStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='ChatsScreen' component={Chats} />
        <Stack.Screen name='ChatDetails' />
      </Stack.Navigator>
    );
  }

  function ProfileSack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SigninScreen' component={SignIn} />
        <Stack.Screen name='SignupScreen' component={SignUp} />
      </Stack.Navigator>
    );
  }

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chats') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'MyAds') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.ui_red,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Post" component={PostStack} />
        <Tab.Screen name="MyAds" component={MyAds} />
        <Tab.Screen name="Profile" component={ProfileSack} />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer >
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
