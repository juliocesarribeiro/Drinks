import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import backGround from '../images/background.png';

export default function Categories() {
  const navigation = useNavigation();

  function navigationDrinks(category: string) {
    navigation.navigate('CocktailAndDrinks', { category });
  }

  function navigationCocktail(category: string) {
    navigation.navigate('CocktailAndDrinks', { category });
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: Dimensions.get('window').width }}>
        <Text style={{ fontSize: 48, textAlign: 'left', fontWeight: 'bold' }}>Cocktails</Text>
        <Text style={{ fontSize: 48, textAlign: 'center', fontWeight: 'bold' }}>and</Text>
        <Text style={{ fontSize: 48, textAlign: 'right', fontWeight: 'bold' }}>Drinks</Text>
      </View>

      <View>
        <Image source={backGround} style={styles.backGroundImage} />
      </View>

      <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
        <RectButton style={styles.buttonDrinks} onPress={() => navigationCocktail('Cocktail')}>
          <Text style={styles.titleButton}>Cocktails</Text>
        </RectButton>
        <RectButton style={styles.buttonCocktails} onPress={() => navigationDrinks('Ordinary_Drink')}>
          <Text style={styles.titleButton}>Ordinary Drink</Text>
        </RectButton>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F5',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCocktails: {
    width: 150,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#FE9925',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  buttonDrinks: {
    width: 150,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#B31A0F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  titleButton: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFFF',
    lineHeight: 33,
  },
  backGroundImage: {
    width: Dimensions.get('window').width,
    height: 300,
  }
});
