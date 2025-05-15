import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoooo.png')}
        style={styles.image}/>
      <Text style={styles.title}>📦 Controle de Estoque</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.buttonText}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Fornecedores')}
      >
        <Text style={styles.buttonText}>Fornecedores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Avaliacoes')}
      >
        <Text style={styles.buttonText}>Avaliações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 40,
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0984e3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});