/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';

import api from '../services/api';

import {RectButton} from 'react-native-gesture-handler';

interface CategoryProps {
  category: string;
}

interface DrinksPros {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export default function CocktailAndDrinks() {
  const [drinks, setDrinks] = useState<DrinksPros[]>([]);
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as CategoryProps;

  useFocusEffect(() => {
    api.get(`filter.php?c=${params.category}`).then((response) => {
      setDrinks(response.data.drinks);
    });
  });

  function detalisDrinks(id: string) {
    navigation.navigate('Details', {id});
  }

  if (!drinks) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={drinks}
        keyExtractor={(drink) => String(drink.idDrink)}
        renderItem={({item}) => (
          <RectButton onPress={() => detalisDrinks(item.idDrink)}>
            <View style={styles.teste}>
              <Image style={styles.Image} source={{uri: item.strDrinkThumb}} />
              <Text style={styles.Title}>{item.strDrink}</Text>
            </View>
          </RectButton>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginRight: 20,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 5,
  },

  teste: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  Image: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  Title: {
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
