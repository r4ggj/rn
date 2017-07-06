import React,{Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import ReactPage from './ReactPage'
import FlowPage from './FlowPage'
import JestPage from './JestPage'
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import TabBar from '../components/TabBar'

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
  }
});
