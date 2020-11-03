import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

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
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;

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
        <Text style={{ fontSize: 24 }}>Carregando......</Text>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      {drink.map((item) => {
        return (
          <View key={item.idDrink} style={styles.Container}>
            <View style={styles.ContainerDrink}>
              <Image
                style={styles.DrinkImage}
                source={{ uri: item.strDrinkThumb }}
              />
              <Text style={styles.Title}>Name:</Text>
              <Text>{item.strDrink}</Text>
            </View>

            <View>
              <Text style={styles.Title}>Ingredient:</Text>

              {drink.}



              <Text style={styles.Title}>Instructions:</Text>
              <Text>{item.strInstructions}</Text>
            </View>
          </View>
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  Title: {
    margin: 5,

    fontSize: 18,
    fontWeight: 'bold',
  },
});
