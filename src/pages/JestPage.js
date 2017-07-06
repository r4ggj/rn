import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class JestPage extends Component{
  constructor(props){
    super(props);
  }
  goToReactPage=()=>{
    this.props.changeTab(0);
  }
  render(){
    return (
      <View style={styles.container}>
          <Text>JestPage</Text>
          <Text onPress={this.goToReactPage} style={{fontSize:18}}>goToReactPage</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{flex:1}
});
