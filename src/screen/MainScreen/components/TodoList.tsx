import React, {useContext} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useStore} from '../../../mobx/hook';
import * as provider from '../../../mobx/provider';
import {TodoItem} from './TodoItem';
import {observer} from 'mobx-react-lite';

export const TodoList = observer(() => {
  const todoList = useContext(provider.StoreContext);
  console.log({todoList});
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.todoHeader}>Open Todos</Text>
        {todoList.openTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.todoHeader}>Finished Todos</Text>
        {todoList.finishedTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  todoHeader: {
    fontSize: 18,
    color: '#333',
  },
});
