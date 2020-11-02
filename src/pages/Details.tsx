/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

interface DetailsRouteParams {
  id: string;
}

interface DetailsProps {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
}

export default function Details() {
  const route = useRoute();
  const [drink, setDrink] = useState<DetailsProps[]>([]);

  const params = route.params as DetailsRouteParams;

  useEffect(() => {
    api.get(`lookup.php?i=${params.id}`).then((responde) => {
      setDrink(responde.data.drinks);
    });
  }, [params.id]);

  if (!drink) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={{fontSize: 24}}>Carregando......</Text>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      {drink.map((item) => {
        return (
          <>
            <View key={item.idDrink} style={styles.ContainerDrink}>
              <Image
                style={styles.DrinkImage}
                source={{uri: item.strDrinkThumb}}
              />
              <Text style={styles.Title}>Name:</Text>
              <Text>{item.strDrink}</Text>
            </View>

            <View>
              <Text style={styles.Title}>Instructions:</Text>
              <Text>{item.strInstructions}</Text>
            </View>
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 10,
  },

  ContainerDrink: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  DrinkImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  Title: {
    margin: 5,

    fontSize: 18,
    fontWeight: 'bold',
  },
});
