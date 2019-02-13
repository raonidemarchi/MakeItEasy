import { createStackNavigator, createAppContainer } from 'react-navigation';
import Signin from '../components/Signin';
import Boards from '../components/Boards';
import BoardDetails from '../components/BoardDetails';

const AppNavigator = createStackNavigator(
  {
    Signin: {
      screen: Signin,
      navigationOptions: {
        header: null,
      },
      portraitOnlyMode: true,
    },
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
    initialRouteName: 'Signin',
  },
);

export default createAppContainer(AppNavigator);
