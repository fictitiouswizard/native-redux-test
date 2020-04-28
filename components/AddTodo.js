import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from "prop-types";

const AddTodo = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const handleSave = () => {
    addTodoHandler(todo);
    setTodo("");
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.todoTextBox}
        value={todo}
        onChangeText={text => setTodo(text)}
        onSubmitEditing={handleSave}
      />
      <TouchableOpacity style={styles.todoButton} onPress={handleSave}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

AddTodo.propTypes = {
  addTodoHandler: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  addTodoContainer: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row"
  },
  todoTextBox: {
    marginLeft: "auto",
    height: 40,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "60%"
  },
  todoButton: {
    marginRight: "auto",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  }
});

export default AddTodo;
