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
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={{ width: Dimensions.get('window').width }}>
          <Text style={{ fontFamily: 'CabinSketch-Bold', fontSize: 48, textAlign: 'left' }}>Cocktails</Text>
          <Text style={{ fontFamily: 'CabinSketch-Bold', fontSize: 36, textAlign: 'center' }}>and</Text>
          <Text style={{ fontFamily: 'CabinSketch-Bold', fontSize: 48, textAlign: 'right' }}>Drinks</Text>
        </View>

        <View style={styles.containerImg}>
          <Image source={backGround} style={styles.backgroundImg} />
        </View>

        <View style={styles.containerButton}>
          <RectButton style={styles.buttonDrinks} onPress={() => navigationCocktail('Cocktail')}>
            <Text style={styles.titleButton}>Cocktails</Text>
          </RectButton>
          <RectButton style={styles.buttonCocktails} onPress={() => navigationDrinks('Ordinary_Drink')}>
            <Text style={styles.titleButton}>Ordinary Drink</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: '#F8F7F5',
  },

  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
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
    fontSize: 20,
    fontFamily: 'CabinSketch-Regular',
    color: '#FFFF',
    lineHeight: 33,
  },

  containerImg: {
    marginTop: 10,
    marginBottom: 10,
  },

  backgroundImg: {
    width: 370,
    height: 250,
  }
});
