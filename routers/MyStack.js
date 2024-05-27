import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../components/Login';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { useMyContextController } from '../firebase';

const Stack = createStackNavigator();
const MyStack = ({navigation}) => {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;

  return (
    <Stack.Navigator initialRouteName="Login"
    v>
      <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerTitleAlign: 'center',
        }} />
      <Stack.Screen name="Register" component={Register} options={{
          title: 'Register',
          headerTitleAlign: 'center',
        }}/>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: (userLogin != null )? userLogin.fullname : 'error',
          headerTitleAlign: 'center',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
