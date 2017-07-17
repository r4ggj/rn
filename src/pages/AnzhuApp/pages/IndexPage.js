import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Carousel from 'react-native-looped-carousel';
import HeaderImageScrollView,{TriggeringView} from '../../../components/ScrollableHeader'
import Container from '../../../components/Container'
const SWIPER_HEIGHT = 166;
const {width}=Dimensions.get('window');
const styles=StyleSheet.create({
    container:{flex:1},
    swiperContent:{height:SWIPER_HEIGHT,width},
    dot:{width:5,height:5,backgroundColor:'green',borderRadius:4,marginHorizontal:4},
    activeDot:{width:5,height:5,backgroundColor:'red',borderRadius:4,marginHorizontal:4}
});

const Header=({type})=><View style={{height:66,backgroundColor:type?'red':'blue'}}/>

export default class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state={
            swiperIndex:0,
            type:false,
            minHeight:24,
            maxHeight:24,
            size:{
                width,
                height:SWIPER_HEIGHT
            }
        }
    }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }
    toLogin=()=>{
        this.props.navigation.navigate('Login');
    }
    render(){
        return (
        <Container
            statusBar={{translucent:true}}
            // translucent
        >
                <HeaderImageScrollView
                    maxHeight={this.state.maxHeight}
                    minHeight={this.state.minHeight}
                    renderHeader={() => (
                   <Header type={this.state.type}/>

                        // <Image source={require('../../../assets/NavLogo.png')} style={styles.image} />
                    )}
                >

                    <ScrollView contentContainerStyle={{height:1000}}>
                        <TriggeringView
                            onDisplay={()=>this.setState({type:true,minHeight:24,maxHeight:24})}
                            onHide={() => this.setState({type:false,minHeight:66,maxHeight:66})}>
                        </TriggeringView>
                        <View onLayout={this._onLayoutDidChange}>
                            <Carousel
                                delay={5000}
                                style={this.state.size}
                                autoplay
                                pageInfo
                                onAnimateNextPage={(p) => console.log(p)}
                            >
                                <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
                                <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
                                <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
                            </Carousel>
                        </View>
                        <TouchableOpacity onPress={this.toLogin}>
                            <Text>GOToLogin</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </HeaderImageScrollView>
        </Container>
        );
    }
}