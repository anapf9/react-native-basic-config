import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      // console.log(response.data)
      setProjects(response.data)
    })
  }, []) 

  async function handleAddProject() {
    const response = await api.post('repositories', {
      title: `Novo repositorio ${Date.now()}`
    })  

    const project = response.data

    setProjects([...projects, project])
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item }) => (
            <Text style={styles.title} >{item.title}!!</Text>
          )}
          >
        </FlatList>

      <TouchableOpacity 
        activeOpacity={0.5} 
        style={styles.button} 
        onPress={handleAddProject}>
        <Text style={styles.buttonText}> 
          Adicionar Repositorio
        </Text>
      </TouchableOpacity>

      </SafeAreaView>

      {/* <View style={styles.container}>
        <Text style={styles.title}> Testando </Text>
          {projects.map(project => (
            <Text style={styles.title} key={project.id}>{project.title}</Text>
          ))}
      </View> */}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#f05',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});