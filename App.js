import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Motorista Particular</Text>
      <ScrollView style={styles.menu}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Nova Viagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Orçamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  menu: {
    width: '100%',
    paddingHorizontal: 20
  },
  menuButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
