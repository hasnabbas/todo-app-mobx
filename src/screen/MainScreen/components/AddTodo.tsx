import React, {useState} from 'react';
import {useStore} from '../../../mobx/hook';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
export const AddTodo = () => {
  const [newTodo, setTodo] = useState('');
  const todoList = useStore();

  const addTodo = () => {
    todoList.addTodo(newTodo);
    setTodo('');
  };

  return (
    <View className="todo-new">
      <TextInput
        value={newTodo}
        placeholder={'Buy groceries after work'}
        onChangeText={(e) => setTodo(e)}
        style={{
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 7.5,
          borderWidth: 0.75,
          borderColor: '#dadada',
          fontSize: 16,
        }}
      />
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'purple',
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginTop: 10,
          borderRadius: 5,
        }}
        onPress={addTodo}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Add Todo
        </Text>
      </TouchableOpacity>
    </View>
  );
};
