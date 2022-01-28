import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Card from './src/components/Card';
import { FlatList } from 'react-native-web';

export default function App() {
  // const timeStamp = '1643326353';
  // const apiKeyPublic = 'd886ce83e10827f98e775f1045a1698a';
  // const md5Hash = '5bfc9bb714062203115f11f6de0f5c22';
  const [cards, setCards] = useState(null);

  async function getHeroes() {
    const resp = await axios.get(
      'http://gateway.marvel.com/v1/public/characters?limit=100&ts=1643326353&apikey=d886ce83e10827f98e775f1045a1698a&hash=5bfc9bb714062203115f11f6de0f5c22',
    );
    setCards(resp.data.data.results);
  }

  useEffect(() => {
    getHeroes();
  }, []);

  if (!cards) {
    <ActivityIndicator color="#EC1D24" size={32} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Marvel Heroes!</Text>
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card heroes={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 800,
    fontSize: 32,
    color: '#fff',
    letterSpacing: 1.5,
    backgroundColor: '#EC1D24',
    padding: 5,
    textTransform: 'uppercase',
  },
});
