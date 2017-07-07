import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class FlowPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>FlowPage</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{flex:1}
});
