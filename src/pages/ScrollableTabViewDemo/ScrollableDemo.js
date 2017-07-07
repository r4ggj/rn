import React,{Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ReactPage from './ReactPage'
import FlowPage from './FlowPage'
import JestPage from './JestPage'
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

export class TabBar extends Component{
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

export default class ScrollableDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      page :0,
      tabNames:['React','Flow','Plus','Jest'],
      tabIconNames:['md-home','md-grid','md-map','md-time']
    };
  }
  renderTabBar =()=><TabBar
    tabNames={this.state.tabNames}
     tabIconNames={this.state.tabIconNames}
     onPlus={alert}
   />
  handleTabChange=({i})=>this.setState({page:i})
  handleTabScroll=({i})=>console.log(i)
  bindScrollableRef=ref=>this.scrollableTabView=ref
  changeTab=tab=>{
    this.scrollableTabView.goToPage(tab)
  }
  render(){
    return (
      <ScrollableTabView
        ref={this.bindScrollableRef}
        locked ={false}
        initialPage ={0}
        page ={this.state.page}
        style={styles.container}
        renderTabBar={this.renderTabBar}
        tabBarPosition ='bottom'
        onChangeTab ={this.handleTabChange}
        onScroll={this.handleTabScroll}
        tabBarUnderlineStyle ={styles.tabBarUnderlineStyle }
        tabBarBackgroundColor ={'#ddd'}
        tabBarActiveTextColor ="blue"
        tabBarInactiveTextColor ="#333"
        tabBarTextStyle ={styles.tabBarTextStyle }
        contentProps ={{}}
        scrollWithoutAnimation ={false}
        prerenderingSiblingsNumber ={1}
        >
        <ReactPage tab={0} tabLabel="0" changeTab={this.changeTab}/>
        <FlowPage tab={1} tabLabel="1" changeTab={this.changeTab}/>
        <JestPage tab={3} tabLabel="3" changeTab={this.changeTab}/>
        <JestPage tab={4} tabLabel="4" changeTab={this.changeTab}/>
      </ScrollableTabView>
    );
  }
}
const styles=StyleSheet.create({
  container:{flex:1},
  tabBarUnderlineStyle :{
    backgroundColor:'red',
    height:2
  },
  tabBarTextStyle :{
    fontSize:18
  },
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
