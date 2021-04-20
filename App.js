import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ColorPropType, TextInput, ScrollView, FlatList, VirtualizedList } from 'react-native';
import ButtonAdd from './components/ButtonAdd.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.showtask = ""
    this.addtask = this.addtask.bind(this)
    this.deltask = this.deltask.bind(this)
    this.state = {
      text: "",
      task: [],
      did: false,
    //   completed: {
    //     0: true,
    //     1: false,
    // }
    }
  }

  task(text) {
    this.setState({
      text
    }, console.log(this.state.text))
  }
  addtask(text) {
    this.state.task.push(this.state.text)
    this.setState({
      text: ""
    })
    console.log(text);
  }
  deltask(index) {
    let tasks = this.state.task;
    tasks.splice(index, 1)
    this.setState({
      task: tasks
    })
  }
  // donetask(index) {
  //   let tasks = this.state.task;
  //   let did = this.state.did
  //   if (did == false){
  //     did = true
  //     Text.style.styles.textDecorationLine= 'line-through'
  //   }
  // }

  oneTask = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.textile} >{item}</Text>
        <View style={styles.done}>
          <ButtonAdd title="done" /*action={this.donetask}*/ text={index} textColor="white" />
        </View>
        <View style={styles.del}>
          <ButtonAdd title="del" action={this.deltask} text={index} textColor="white" />
        </View>
      </View>
    )
  }
  render() {
    const Item = ({ title }) => (
      <View>
        <Text>{title}</Text>
      </View>
    );
    const App = () => {
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.head}>
          <Text style={styles.titre}>To Do List</Text>
        </View>
        <View style={styles.list}>
          <View>
            <FlatList
              data={this.state.task}
              renderItem={this.oneTask}
              keyExtractor={(item, index) => index}
              // style={{
              //   textDecoration: this.state.completed[index]
              //     ? "line-through"
              //     : ""
              // }}
              // key={index}
            />
          </View>
        </View>
          <View style={styles.addlist}>
            <View style={styles.sometext}>
              <TextInput
                placeholder=' Tap something'
                onChangeText={(text) => this.task(text)}
              />
            </View>
            <View style={styles.buttonplus}>
              <ButtonAdd title="+" action={this.addtask} textColor="white" />
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    
  },
  head: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    backgroundColor: 'black'
  },
  list: {
    flex: 15,
    padding: 10,
    borderColor: "black",
    backgroundColor: "black"


  },
  addlist: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  sometext: {
    justifyContent: "center",
    flex: 8,

  },

  titre: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  textile: {
    // textDecorationLine: 'line-through',
    fontSize: 20,
    color: "white",
    flex: 10,
    flexDirection: "row",
  },
  buttonplus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 5,
    backgroundColor: "black",
  },
  row: {
    flexDirection: 'row',
    margin: 2,
  },
  del: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    backgroundColor: "red",

    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  done: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    backgroundColor: "lime",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },

});

