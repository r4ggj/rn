import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
export default class ViewUtils{
	static getLeftButton(callback){
		return (
			<TouchableOpacity style={styles.leftButton}
				onPress={callback}
			>
				<Text style={styles.leftButtonText}>返回</Text>
			</TouchableOpacity>
		);
	}
}

const styles=StyleSheet.create({
	leftButton:{
		padding:8
	},
	leftButtonText:{
		fontSize:18,
		color:'#333'
	}
});