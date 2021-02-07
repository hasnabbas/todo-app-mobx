import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import {AddTodo, TodoList} from './components';

export default function MainScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}>
        <AddTodo />
        <TodoList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
