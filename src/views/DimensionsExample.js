import React,{Component} from 'react'
import {
	View,
	Text,
	Dimensions
} from 'react-native'
import NavigationBar from '../components/NavigationBar'
import ViewUtils from "../utils/ViewUtils";
const ExtraDimensions = require('react-native-extra-dimensions-android');
const window = Dimensions.get('window');

export default class DimensionsExample extends Component{
	render(){
		return (
			<View style={{ height:false?window.height-ExtraDimensions.get("SOFT_MENU_BAR_HEIGHT") :ExtraDimensions.get("REAL_WINDOW_HEIGHT")-ExtraDimensions.get("SOFT_MENU_BAR_HEIGHT")-ExtraDimensions.get("STATUS_BAR_HEIGHT")}}>
				<View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: ExtraDimensions.get('STATUS_BAR_HEIGHT')}}>
					<Text style={{ color: 'white' }}>STATUS_BAR_HEIGHT ({ExtraDimensions.get('STATUS_BAR_HEIGHT')})</Text>
				</View>
				<NavigationBar
					title="屏幕尺寸"
					leftButton={ViewUtils.getLeftButton(()=>this.props.navigation.goBack(null))}
				/>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>WINDOW_HEIGHT ({window.height})</Text>
					<Text>REAL_WINDOW_WIDTH ({ExtraDimensions.get('REAL_WINDOW_HEIGHT')})</Text>
					<Text>WINDOW_WIDTH ({window.width})</Text>
					<Text>REAL_WINDOW_WIDTH ({ExtraDimensions.get('REAL_WINDOW_WIDTH')})</Text>
				</View>
				<View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', height: ExtraDimensions.get('SMART_BAR_HEIGHT')}}>
					<Text style={{ color: 'white' }}>SMART_BAR_HEIGHT(部分魅族手机有) ({ExtraDimensions.get('SMART_BAR_HEIGHT')})</Text>
				</View>
				<View style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')}}>
					<Text style={{ color: 'white' }}>SOFT_MENU_BAR_HEIGHT ({ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')})</Text>
				</View>
				{/*<View style={{backgroundColor:'red',position:'absolute',height:10,width:window.width,bottom:0}}/>*/}
			</View>
		);
	}
}