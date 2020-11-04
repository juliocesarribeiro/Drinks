import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

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
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

export default function Details() {
  const route = useRoute();
  const [drink, setDrink] = useState<DetailsProps[]>([]);

  const params = route.params as DetailsRouteParams;

  useEffect(() => {
    (async () => {
      const response = await api.get(`lookup.php?i=${params.id}`)

      setDrink(response.data.drinks);
    })()
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
        console.log(item.idDrink);

        return (
          <View key={item.idDrink} style={styles.Container}>
            <View style={styles.ContainerDrink}>
              <Image
                style={styles.DrinkImage}
                source={{ uri: item.strDrinkThumb }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text style={styles.Title}>Name:</Text>
              <Text>{item.strDrink}</Text>
            </View>

            <ScrollView>
              <Text style={styles.Title}>Ingredient:</Text>
              <Text>{item.strIngredient1}</Text>
              <Text>{item.strIngredient2}</Text>
              <Text>{item.strIngredient3}</Text>
              <Text>{item.strIngredient4}</Text>
              <Text>{item.strIngredient5}</Text>
              <Text>{item.strIngredient6}</Text>
              <Text>{item.strIngredient7}</Text>
              <Text>{item.strIngredient8}</Text>
              <Text>{item.strIngredient9}</Text>
              <Text>{item.strIngredient10}</Text>
              <Text>{item.strIngredient11}</Text>
              <Text>{item.strIngredient12}</Text>
              <Text>{item.strIngredient13}</Text>
              <Text>{item.strIngredient14}</Text>
              <Text>{item.strIngredient15}</Text>

              <Text style={styles.Title}>strMeasure:</Text>
              <Text>{item.strMeasure1}</Text>
              <Text>{item.strMeasure2}</Text>
              <Text>{item.strMeasure3}</Text>
              <Text>{item.strMeasure4}</Text>
              <Text>{item.strMeasure5}</Text>
              <Text>{item.strMeasure6}</Text>
              <Text>{item.strMeasure7}</Text>
              <Text>{item.strMeasure8}</Text>
              <Text>{item.strMeasure9}</Text>
              <Text>{item.strMeasure10}</Text>
              <Text>{item.strMeasure11}</Text>
              <Text>{item.strMeasure12}</Text>
              <Text>{item.strMeasure13}</Text>
              <Text>{item.strMeasure14}</Text>
              <Text>{item.strMeasure15}</Text>

              <Text style={styles.Title}>Instructions:</Text>
              <Text>{item.strInstructions}</Text>
            </ScrollView>
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
    zIndex: 3,
  },

  Title: {
    margin: 5,

    fontSize: 18,
    fontWeight: 'bold',
  },
});
