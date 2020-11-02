import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Categories() {
  const navigation = useNavigation();

  function navigationDrinks(category: string) {
    navigation.navigate('CocktailAndDrinks', {category});
  }

  function navigationCocktail(category: string) {
    navigation.navigate('CocktailAndDrinks', {category});
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={() => navigationDrinks('Ordinary_Drink')}>
        <Text>Ordinary Drink</Text>
      </RectButton>
      <RectButton onPress={() => navigationCocktail('Cocktail')}>
        <Text>Cocktails</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});
