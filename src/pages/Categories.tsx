import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import backGround from '../images/background.svg';

export default function Categories() {
  const navigation = useNavigation();

  function navigationDrinks(category: string) {
    navigation.navigate('CocktailAndDrinks', { category });
  }

  function navigationCocktail(category: string) {
    navigation.navigate('CocktailAndDrinks', { category });
  }

  return (
    <View style={styles.container}>
      <RectButton style={styles.button} onPress={() => navigationDrinks('Ordinary_Drink')}>
        <Text style={styles.titleButton}>Ordinary Drink</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={() => navigationCocktail('Cocktail')}>
        <Text style={styles.titleButton}>Cocktails</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  button: {
    marginBottom: 20,
    width: 250,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#15c3d6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backGroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
