import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenCategories from './pages/Categories';
import ScreenCocktailAndDrinks from './pages/CocktailAndDrinks';
import ScreenDetails from './pages/Details';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Categories" component={ScreenCategories} />
        <Screen name="CocktailAndDrinks" component={ScreenCocktailAndDrinks} />
        <Screen name="Details" component={ScreenDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
