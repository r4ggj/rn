import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TabBar extends Component{
  constructor(props){
    super(props);
    this.setAnimationValue=this.setAnimationValue.bind(this);
  }
  tabIcons=[];

  static propTypes={
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue({ value }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabIconNames.map((tab, i) => {
        return <TouchableOpacity
            key={tab}
           onPress={() =>this.props.tabs[i] ==="Plus"?this.props.onPlus():this.props.goToPage(i)}
            style={[styles.tab,i===1?{marginRight:25}:(i===2?{marginLeft:25}:{}):{}]}
            >
          <Icon
            name={tab}
            size={24}
            color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[i] = icon; }}
          />
          <Text style={[styles.tabName,{color:this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}]}>{this.props.tabNames[i]}</Text>
        </TouchableOpacity>;
      })}
      {/* 特殊按鈕絕對定位 */}
    <View
      pointerEvents={"box-none"}
      style={{position:'absolute',left:0,right:0,top:0,bottom:0,justifyContent:'center',alignItems:'center'}}

      >
      <TouchableOpacity
         onPress={this.props.onPlus}
          style={{height:50,justifyContent:'center',alignItems:'center'}}
          >
        <Icon
          name={'md-map'}
          size={30}
          color={'green'}
        />
      </TouchableOpacity>
    </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor:'#f1f1f1'
  },
});

export default TabBar;
