import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';

import api from '../services/api';

import { RectButton, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

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

  useEffect(() => {
    api.get(`filter.php?c=${params.category}`).then((response) => {
      setDrinks(response.data.drinks);
    });
  });

  function detailsDrinks(id: string) {
    navigation.navigate('Details', { id });
  }

  return (
    <SafeAreaView>
      <FlatList
        data={drinks}
        keyExtractor={(drink) => String(drink.idDrink)}
        renderItem={({ item }) => (
          <RectButton onPress={() => detailsDrinks(item.idDrink)}>
            <View style={styles.teste}>
              <Image style={styles.Image} source={{ uri: item.strDrinkThumb }} />
              <Text style={styles.Title}>{item.strDrink}</Text>
            </View>
          </RectButton>
        )}
        ListFooterComponent={({ item }) => (
          <View>
            <ActivityIndicator size='small' color="#8d8d8d" />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  teste: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: '#d3e2e6',

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
