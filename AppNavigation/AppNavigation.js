import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/navbarscreens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/navbarscreens/SearchScreen/SearchScreen';
import FavouriteScren from '../screens/navbarscreens/FavouritesScreen/FavouritesScreen';
import CategoriesScreen from '../screens/navbarscreens/CategoriesScreen/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';


const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Search: SearchScreen,
        Favourites: FavouriteScren,
        Categories: CategoriesScreen,
        Recipe: RecipeScreen,
        RecipesList: RecipesListScreen,
        //Ingredient: IngredientScreen,    
        //IngredientsDetails: IngredientsDetailsScreen
    },
    {
        initialRouteName: 'Home',
        // headerMode: 'float',
        defaulfNavigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
            }
        })
    },
);


const DrawerStack = createDrawerNavigator(
    {
        Main: MainNavigator
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Main',
        drawerWidth: 250,
        contentComponent: DrawerContainer
    }
);


export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;