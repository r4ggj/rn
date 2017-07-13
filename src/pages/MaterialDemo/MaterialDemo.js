import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image
} from 'react-native'
import {MKButton,MKColor,getTheme,MKIconToggle} from 'react-native-material-kit'
const theme = getTheme();
export default class MaterialDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      show:true
    };
  }
  _onIconChecked=({checked})=>{
    this.setState({
      show:checked
    });
  }
  render(){
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text
           state_checked={true}
          pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );
    const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

    return (
      <View style={styles.container}>
        <ColoredRaisedButton />
        <MKButton
    backgroundColor={MKColor.Teal}
    shadowRadius={2}
    shadowOffset={{width:0, height:2}}
    shadowOpacity={.7}
    shadowColor="black"
    onPress={() => {
      console.log('hi, raised button!');
    }}
    paddingVertical={8}
    >
    <Text pointerEvents="none"
          style={{color: 'white', fontWeight: 'bold',textAlign:'center'}}>
      RAISED BUTTON
    </Text>
  </MKButton>
      <View style={theme.cardStyle}>
        {this.state.show?<Image source={require('../../assets/NavLogo.png')} style={theme.cardImageStyle} />:null}
        <Text style={theme.cardTitleStyle}>Welcome</Text>
        <Text style={theme.cardContentStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </Text>
        <View style={theme.cardMenuStyle}>{menu}</View>
        <Text style={theme.cardActionStyle}>My Action</Text>
      </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:Platform.OS==='ios'?20:0
  }
});
