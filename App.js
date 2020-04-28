import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = todo => {
    let todoId = todos.length + 1;
    setTodos([
      ...todos,
      ...[
        {
          id: todoId,
          text: todo,
          completed: false
        }
      ]
    ]);
  };

  return (
    <View style={styles.container}>
      <AddTodo addTodoHandler={addTodoHandler} />
      <ScrollView style={{ marginTop: 20, marginHorizontal: 20 }}>
        {todos.map(todo => (
          <Text style={{ margin: 10 }} key={todo.id}>
            {todo.text}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
