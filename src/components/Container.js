/**
 *  页面通用容器
 *  用于状态栏，返回键监听等统一处理
 *  安卓状态栏高度一般为24
 */
import React,{Component} from 'react'
import {
    View,
    StatusBar,
    StyleSheet,
    Platform
} from 'react-native'
const styles=StyleSheet.create({
    container:{flex:1}
});
export default class Container extends Component{
    constructor(props){
        super(props);
        const {translucent,backgroundColor,barStyle,hidden}=props.statusBar||{};
        this.state={
            translucent:true,
            backgroundColor:backgroundColor||'gray',
            barStyle:barStyle||'light-content',
            hidden:hidden===true,
        };
    }

    set(name,value){
        this.setState({
            [name]:value
        });
    }

    get(name){
        return this.state[name];
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={this.state.translucent}
                    backgroundColor={this.state.backgroundColor}
                    barStyle={this.state.barStyle}
                    hidden={this.state.hidden}
                />
                {this.props.translucent?null:<View style={{height:StatusBar.currentHeight}}/>}
                {this.props.children}
            </View>
        );
    }
}