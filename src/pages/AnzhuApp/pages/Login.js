import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Container from '../../../components/Container';
const styles=StyleSheet.create({

});

export default class Login extends Component{
    constructor(props){
        super(props);
    }
    goBack=()=>{
        this.props.navigation.goBack(null);
    }
    render(){
        return (
            <Container>
                <TouchableOpacity onPress={this.goBack}>
                    <Text>goBack</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}