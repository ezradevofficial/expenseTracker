import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddExpenseScreen,
  AddTripScreen,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  TripExpensesScreen,
  WelcomeScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="SignIn"
          options={{presentation: 'modal', animation: 'slide_from_bottom'}}
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{presentation: 'modal', animation: 'slide_from_bottom'}}
          component={SignUpScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="AddTrip" component={AddTripScreen} />
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
