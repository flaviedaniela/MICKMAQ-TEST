import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PersonnalListScreen from "./src/screens/PersonnalListScreen";
import ListScreen from "./src/screens/ListScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: PersonnalListScreen,
    Lst:ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
