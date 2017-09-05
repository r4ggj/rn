import React,{Component} from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native'
import SimpleList from '../components/SimpleList'

export default class SimpleListViewExample extends Component{
	state={
		data:[],
		refreshing:false,
		loadingMore:false,
		totalPages:0,
		pageNo:0
	};
	static navigationOptions=({navigation})=>({
		headerTitle:"ListView例子",
		headerVisible:true
	})
	componentDidMount(){
		this.loadData();
	}
	renderRow=(rowData,sectionID, rowID, highlightRow)=>{
		return <View>
			<TouchableOpacity onPress={()=>alert(rowID)} style={{padding:8,flexDirection:'row',alignItems:'center',height:100,margin:4,elevation:2,backgroundColor:'#fff',borderWidth:0.5,borderColor:'#ddd',borderRadius:2}}>
				<Image source={require('../assets/NavLogo.png')} resizeMode="contain" style={{width:80,height:80}}/>
				<Text>{rowData.name}</Text>
			</TouchableOpacity>
		</View>
	}
	
	loadData=async (params,callback)=>{
		await new Promise(resolve=>setTimeout(resolve,500));
		this.setState({
			data:params&&params.pageNo?[...this.state.data,...Array.from(new Array(15)).map((v,i)=>({name:"hehe"}))]:Array.from(new Array(15)).map((v,i)=>({name:"hehe"})),
			totalPages:10,
			pageNo:params?params.pageNo:0
		},callback);
	}
	render(){
		return (
			<SimpleList
				style={{flex:1}}
				renderRow={this.renderRow}
				refreshing={this.state.refreshing}
				loadingMore={this.state.loadingMore}
				data={this.state.data}
				totalPages={this.state.totalPages}
				setRefreshing={(refreshing)=>this.setState({refreshing})}
				setLoadingMore={(loadingMore)=>this.setState({loadingMore})}
				loadData={this.loadData}
				pageEnable
				pageNo={this.state.pageNo}
				pageSize={15}
			/>
		);
	}
}