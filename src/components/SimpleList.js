import React,{Component,PropTypes} from 'react'
import {
	ListView,
	RefreshControl,
	ActivityIndicator,
	StyleSheet,
	View,
	Text,
} from 'react-native'

const styles=StyleSheet.create({
	list:{},
	loadMore:{alignItems:'center',justifyContent:'center',height:44},
	loadMoreText:{fontSize:16,color:'#666'},
	separator:{height:0.2,backgroundColor:"#ddd"}
})

export default class SimpleList extends Component{
	constructor(props){
		super(props);
		this.state={
			ds:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
		};
	}
	static propTypes={
		renderRow:PropTypes.func.isRequired,//不解释
		renderHeader:PropTypes.func,
		renderFooter:PropTypes.func,
		renderSeparator:PropTypes.func,
		
		refreshing:PropTypes.bool.isRequired, //下拉刷新状态
		loadingMore:PropTypes.bool, //上拉加载更多状态
		data:PropTypes.array.isRequired, //数据源
		
		pageEnable:PropTypes.bool,//是否分页加载
		pageNo:PropTypes.number,//分页当前页数，从0开始
		pageSize:PropTypes.number,//分页大小
		totalPages:PropTypes.number.isRequired,//分页数据总条数，
		
		setRefreshing:PropTypes.func.isRequired,
		setLoadingMore:PropTypes.func,
		loadData:PropTypes.func.isRequired,//请求数据的方法，不包含分页，数据处理等逻辑；参数：1.pageNo,pageSize;...2.callback；返回值：原始数据;loadData无论成功与否调用第二个参数方法；
		
		scrollTo:PropTypes.func,
		scrollToEnd:PropTypes.func
	};
	
	static defaultProps={
		pageNo:0,
		pageSize:10,
		totalPages:0,
		pageEnable:false,
		loadingMore:false,
	};
	onRefresh=()=>{
		if(this.props.refreshing){
			return ;
		}
		this.props.setRefreshing(true);
		this.props.loadData({
			pageNo:0,
			pageSize:15
		},()=>this.props.setRefreshing(false));
	}
	
	static SeparatorComponent=()=><View style={styles.separator}/>
	
	onLoadMore=()=>{
		if(!this._hasMore()||this.props.loadingMore){
			return;
		}
		this.props.setLoadingMore(true);
		this.props.loadData({
			pageNo:this.props.pageNo+1,
			pageSize:this.props.pageSize
		},()=>this.props.setLoadingMore(false));
	}
	_hasMore=()=>{
		return this.props.pageNo<this.props.totalPages;
	}
	_renderFooter=()=> {
		if(this.props.renderFooter){
			return this.props.renderFooter();
		}
		if(!this.props.pageEnable){
			 return <View style={styles.loadMore}/>;
		}
		if(!this._hasMore()&&this.props.totalPages!==0){
			return <View style={styles.loadMore}>
				<Text style={styles.loadMoreText}>没有更多数据了...</Text>
			</View>
		}
		if(!this.props.loadingMore){
			return <View style={styles.loadMore}/>;
		}
		return (
			<View style={styles.loadMore}>
				<ActivityIndicator
					color={'teal'}
				/>
			</View>
		);
	}
	render(){
		
		return (
			<ListView
				style={[styles.list,this.props.style]}
				enableEmptySections
				dataSource={this.state.ds.cloneWithRows(this.props.data)}
				renderRow={this.props.renderRow}
				renderHeader={this.props.renderHeader}
				onEndReached={this.onLoadMore}
				onEndReachedThreshold={20}
				pageSize={5}
				initialListSize={10}
				renderSeparator={this.props.renderSeparator}
				refreshControl={
					<RefreshControl
						refreshing={this.props.refreshing}
						onRefresh={this.onRefresh}
						colors={['teal']}
						tintColor={'teal'}
					/>
				}
				renderFooter={this._renderFooter}
				scrollTo={this.props.scrollTo}
				scrollToEnd={this.props.scrollToEnd}
			/>
		);
	}
}
