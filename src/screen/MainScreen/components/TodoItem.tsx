import React, {useState} from 'react';
import TodoItemClass from '../../../mobx/TodoItem';
import {useStore} from '../../../mobx/hook';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => {
  const todoList = useStore();
  const [newText, setText] = useState(todo.text);
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText('');
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.todoText}
            value={newText}
            onChangeText={(e) => setText(e)}
          />
          <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={saveText}>
            <Text style={styles.doneText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <TextInput
              type="checkbox"
              onChange={todo.toggleIsDone}
              defaultChecked={todo.isDone}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: 5,
            }}>
            <Text style={styles.editText} onPress={() => setEdit(true)}>
              Edit
            </Text>
            <Text style={styles.doneText} onPress={todo.toggleIsDone}>
              Done
            </Text>
            <Text
              style={styles.removeText}
              onPress={() => todoList.removeTodo(todo)}>
              Remove
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 0.25,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  todoText: {
    fontSize: 14,
  },
  inputText: {},
  editText: {
    color: 'blue',
    fontSize: 13,
    fontWeight: 'bold',
  },
  doneText: {
    color: 'green',
    fontSize: 13,
    marginStart: 10,
    fontWeight: 'bold',
  },
  removeText: {
    color: 'red',
    marginStart: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
