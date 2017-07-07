import React,{Component} from 'React'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import VideoPlayer from '../../components/VideoPlayer'

class VideoDemo extends Component{
  constructor(props){
    super(props);
    this.state={
     rate: 1,
     volume: 1,
     muted: false,
     resizeMode: 'contain',
     duration: 0.0,
     currentTime: 0.0,
     paused: true,
     source:'',
     ready:false,
     play:false
    };
  }

  render(){


   return (
     <View style={styles.container}>
       <TouchableOpacity
         onPress={e=>{
           this.props.navigation.navigate('VideoPlayer',{source:{ uri: `http://220.170.49.110/8/k/z/v/g/kzvgatvawxiaguxqumajekofqdiphk/he.yinyuetai.com/CC26015644E6A41364C408E18E9B57FE.flv?sc\u003da76fd52a8df609a0\u0026br\u003d3128\u0026vid\u003d2643109\u0026aid\u003d1095\u0026area\u003dML\u0026vst\u003d0`}});
         }}
         >
         <Text style={{fontSize:18,color:'#fff'}}>load</Text>
       </TouchableOpacity>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
});
export default VideoDemo
