import { createStackNavigator, createAppContainer } from 'react-navigation';
import Signin from '../Signin';
import Boards from '../Boards';
import BoardDetails from '../BoardDetails';

const AppNavigator = createStackNavigator(
  {
    Signin: {
      screen: Signin,
      navigationOptions: {
        header: null,
      },
    },
    Boards: {
      screen: Boards,
      navigationOptions: {
        header: null,
      },
    },
    BoardDetails: {
      screen: BoardDetails,
    }
  },
  {
    initialRouteName: 'Signin',
  },
);

export default createAppContainer(AppNavigator);
