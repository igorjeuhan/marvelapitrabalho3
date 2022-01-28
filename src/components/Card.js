import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Card = ({ heroes }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: heroes.thumbnail.path + '.' + heroes.thumbnail.extension,
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.nome}>{heroes.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#EC1D24',
    borderRadius: 3,
  },
  nome: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
    fontWeight: 600,
    fontFamily: 'Roboto',
  },
});
