import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoading from '../components/AuthLoading';
import SignIn from '../components/Signin';
import Boards from '../components/Boards';
import BoardDetails from '../components/BoardDetails';

const SignedOutNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

const SignedInNavigator = createStackNavigator(
  {
    Boards: {
      screen: Boards,
      navigationOptions: {
        header: null,
      },
    },
    BoardDetails: {
      screen: BoardDetails,
    },
  },
  {
    initialRouteName: 'Boards',
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    SignedOut: SignedOutNavigator,
    SignedIn: SignedInNavigator,
    Auth: AuthLoading,
  },
  {
    initialRouteName: 'Auth',
  }
));
