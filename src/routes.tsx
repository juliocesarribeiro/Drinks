import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenCategories from './pages/Categories';
import ScreenCocktailAndDrinks from './pages/CocktailAndDrinks';
import ScreenDetails from './pages/Details';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen name="Categories" component={ScreenCategories} />
        <Screen name="CocktailAndDrinks" component={ScreenCocktailAndDrinks}
          options={{
            headerShown: true,
            header: () => <Header title="Cocktails And Drinks" showCancel={false} />
          }} />
        <Screen name="Details" component={ScreenDetails} options={{
          headerShown: true,
          header: () => <Header title="Details" showCancel={true} />
        }} />
      </Navigator>
    </NavigationContainer>
  );
}
