import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../services/api';
import SearchFilter from '../utils/searchFilter';

interface DetailsRouteParams {
  id: string;
}
interface DetailsProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
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
    <SafeAreaView style={styles.container}>
      {drink.map((item) => {
        return (
          <View key={item.idDrink}>
            <View style={styles.ContainerDrink}>
              <Image
                style={styles.DrinkImage}
                source={{ uri: item.strDrinkThumb }}
              />
              <Text style={styles.Title}>Name:</Text>
              <Text>{item.strDrink}</Text>
            </View>

            <ScrollView>
              <View>
                <Text style={styles.Title}>Ingredient:</Text>
                <Text>{SearchFilter(drink[0], 'strIngredient').join('\n')}</Text>
              </View>

              <View>
                <Text style={styles.Title}>Measure:</Text>
                <Text>{SearchFilter(drink[0], 'strMeasure').join('\n')}</Text>
              </View>

              <View>
                <Text style={styles.Title}>Instructions:</Text>
                <Text>{item.strInstructions}</Text>
              </View>

            </ScrollView>

          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F5',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
