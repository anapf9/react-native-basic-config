import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, []) 
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
  }
});