import React,{Component} from 'React'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native'

import {
  Button,
  Badge,
  H4,
  Bubble,
  Card,
  Carousel,
  Checkbox,
  Gravatar,
  Indicator,
  Input,
  Progress,
  H5,
  Switcher,
  Radio,
  RadioGroup,
  P,
  B,
  SegmentedControlButton,
  Slider,
  Spinner,
  TabButton,
  H1,
  H2,
  H3,
  H6,
  Strong,
  Em,
  I,
  A
} from 'nachos-ui';

class NachosUIDemo extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstChecked: true,
      secondChecked: true,
      value:null,
      radioValue:null,
      progressValue:0.2,
      valueOne:null,
      valueTwo:null,
      sliderValue:0.3
    }
  }

  componentDidMount() {
      this._interval = setInterval(
        () => {
          if (this.state.progressValue >= 1) {
            return this.setState({ progressValue: 0 })
          }
          this.setState({
            progressValue: this.state.progressValue + 0.05,
          })
        },
        500
      )
    }

    componentWillUnmount() {
      clearInterval(this._interval)
    }
  handleFirstCheckboxChange = (firstChecked) => {
    this.setState({ firstChecked })
  }

  handleSecondCheckboxChange = (secondChecked) => {
    this.setState({ secondChecked })
  }
  handleSliderChange = (sliderValue) => {
    this.setState({ sliderValue })
  }
  render(){
    const bubbleStyle = { margin: 10 };
    const btnStyle = { margin: 15 }
    const cardStyle = { margin: 15, width: 280 }
    const checkboxStyle = { margin: 15 }
    const gravatarStyle = {margin: 15}
    const inputStyle = {margin: 15}
     const progressStyle = { margin: 15 }
     const textStyle = { margin: 15 }
    const imageStyle = {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
  const indicatorStyle = {
    marginRight: 30,
  }
  const radioStyle = { margin: 10 }
   return (
     <ScrollView style={styles.container}>
       <View>
         <H4>Badge:</H4>
         <View style={{ margin: 15, flexDirection: 'row' }}>
          <Badge value={123} style={{ marginRight: 15 }} />
          <Badge value={4} color='red' />
        </View>
       </View>
      <View>
        <H4>Bubble:</H4>
        <View style={{ marginVertical: 15, flexDirection: 'row' }}>
          <Bubble style={bubbleStyle}>Hey, What’s Up?</Bubble>
          <Bubble
            style={bubbleStyle}
            arrowPosition='top'
            color='#ff9c00'
          >
            What’s cooking?
          </Bubble>
        </View>
        <View>
      </View>
      <H4>Button:</H4>
      <Button type='success' style={btnStyle}>Success</Button>
      <Button type='danger' style={btnStyle}>Danger</Button>
      <Button style={btnStyle}>Primary</Button>

      <Button kind='squared' type='success' style={btnStyle}>
        Success
      </Button>
      <Button kind='squared' type='danger' style={btnStyle}>
        Danger
      </Button>
      <Button
        kind='squared'
        iconName='md-cloud-download'
        style={btnStyle}
      >
        Primary
      </Button>

      <H4 align='center'>Disabled style</H4>
      <Button type='success' disabled style={btnStyle}>
        Success
      </Button>
      <Button kind='squared' type='danger' disabled style={btnStyle}>
        Danger
      </Button>
    </View>
  <View>
    <H4>Card:</H4>
    <Card
      footerContent='The avocado is a tree that is native to Mexico'
      image='https://upx.cz/BsN'
      style={cardStyle}
    />
    <Card
      footerContent='Agaves are a type of succulent plant from Mexico'
      image='https://upx.cz/BsD'
      style={cardStyle}
    />
  </View>
  <View>
      <H4>Carousel:</H4>
      <View style={{ marginVertical: 15 }}>
        <Carousel
          images={[
            'https://placehold.it/300/311112',
            'https://placehold.it/300/59C480',
            'https://placehold.it/300/546C80',
            'https://placehold.it/300/D58554',
            'https://placehold.it/300/F0CD9B',
            'https://placehold.it/300/311112',
          ]}
        />
      </View>
    </View>
    <View>
    <H4>Checkbox:</H4>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox
          style={checkboxStyle}
          checked={this.state.firstChecked}
          onValueChange={this.handleFirstCheckboxChange}
        />
        <Checkbox
          style={checkboxStyle}
          kind='circle'
          checked={this.state.secondChecked}
          onValueChange={this.handleSecondCheckboxChange}
        />
        <Checkbox style={checkboxStyle} checked disabled />
      </View>
    </View>
    <View>
    <H4>Gravatar:</H4>
    <Gravatar email='blah@blah.com' style={gravatarStyle} />
    <Gravatar
      email='blahblah@blah.com'
      size={150}
      rating='pg'
      default='retro'
      style={gravatarStyle}
    />
    <Gravatar
      md5='313cbdb52db5b6bb6b3f14bc4ddae461'
      size={100}
      circle
      style={gravatarStyle}
    />
  </View>
  <View>
      <H4>Indicator:</H4>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <Indicator
          position='right top'
          value='12'
          style={indicatorStyle}
        >
          <Image
            style={imageStyle}
            source={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
        </Indicator>
        <Indicator
          position='right top'
          value='2'
          type='success'
          style={indicatorStyle}
        >
          <Image
            style={imageStyle}
            source={{
              uri: 'https://d3vv6lp55qjaqc.cloudfront.net/items/130d3E0o0E0I31460H0n/Untitled-1.png',
            }}
          />
        </Indicator>
      </View>
    </View>
    <View>
        <H4>Input:</H4>
        <Input
          underlineColorAndroid="transparent"
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input style={inputStyle} disabled value='Disabled input' />
        <Input
          underlineColorAndroid="transparent"
          status='warn'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          underlineColorAndroid="transparent"
          status='error'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          underlineColorAndroid="transparent"
          status='valid'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          underlineColorAndroid="transparent"
          icon='ios-beer'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
      </View>
      <View>
        <H4>Progress:</H4>
        <Progress
          progress={this.state.progressValue}
          style={progressStyle}
        />
        <H5>
          Progress: {Math.round(this.state.progressValue * 100)}
        </H5>
      </View>
      <View>
        <H4>Radio:</H4>
        <Switcher
          defaultSelected='bus'
          onChange={radioValue => this.setState({ radioValue })}
        >
          <Radio value='car' style={radioStyle} />
          <Radio value='bus' style={radioStyle} />
        </Switcher>
      </View>
      <View style={{margin:10}}/>
      <View>
        <H4 style={{ marginBottom: 20 }}>RadioGroup:</H4>
        <RadioGroup
          onChange={radioValue => this.setState({ radioValue })}
          defaultSelected='bus'
          options={['Red', 'Green', 'Blue']}
        />

        <P style={{ marginVertical: 20 }}>
          <B>Selected value:</B> {this.state.radioValue || 'no selection'}
        </P>
      </View>
      <View>
       <H4 style={{ marginBottom: 20 }}>SegmentedControlButton:</H4>
       <Switcher
         onChange={valueOne => this.setState({ valueOne })}
         direction='row'
       >
         <SegmentedControlButton value='access' text='Access'/>
         <SegmentedControlButton value='feed' text='Feed' />
         <SegmentedControlButton
           value='invitation'
           text='Invitation'
         />
       </Switcher>

       <P style={{ marginVertical: 20 }}>
         <B>Selected value:</B>
         {' '}
         {this.state.valueOne || 'no selection'}
       </P>

       <Switcher
         onChange={valueTwo => this.setState({ valueTwo })}
         direction='column'
       >
         <SegmentedControlButton value='access' text='Access' />
         <SegmentedControlButton value='feed' text='Feed' />
         <SegmentedControlButton
           value='invitation'
           text='Invitation'
         />
       </Switcher>

       <P style={{ marginVertical: 20 }}>
         <B>Selected value:</B>
         {' '}
         {this.state.valueTwo || 'no selection'}
       </P>
     </View>
     <View>
        <H4>Slider:</H4>
        <Slider
          value={this.state.sliderValue}
          onValueChange={this.handleSliderChange}
        />
        <P>
          Value: <B>{this.state.sliderValue.toFixed(2)}</B>
        </P>
      </View>
      <View>
     <H4>Spinner:</H4>
     <View style={{ margin: 15 }}>
       <Spinner duration={200} size={15} color={'rgba(0,0,0,0.5)'}/>
     </View>
   </View>
   <View>
       <H4 style={{ marginBottom: 20 }}>Example:</H4>
       <Switcher
         onChange={valueOne => this.setState({ valueOne })}
         defaultSelected={this.state.valueOne}
       >
         <TabButton
           value='volume'
           text='Volume'
           iconName='md-volume-off'
         />
         <TabButton value='walk' text='Walk' iconName='md-walk' />
         <TabButton value='wine' text='Wine' iconName='md-wine' />
       </Switcher>

       <P style={{ marginVertical: 20 }}>
         <B>Selected value:</B>
         {' '}
         {this.state.valueOne || 'no selection'}
       </P>

       <Switcher
         onChange={valueTwo => this.setState({ valueTwo })}
         defaultSelected={this.state.valueTwo}
         direction='column'
       >
         <TabButton
           value='volume'
           text='Volume'
           iconName='md-volume-off'
         />
         <TabButton value='walk' text='Walk' iconName='md-walk' />
         <TabButton value='wine' text='Wine' iconName='md-wine' />
       </Switcher>

       <P style={{ marginVertical: 20 }}>
         <B>Selected value:</B>
         {' '}
         {this.state.valueTwo || 'no selection'}
       </P>
     </View>
     <View>
      <H4>Example:</H4>
      <H1 style={textStyle}>Headline 1</H1>
      <H2 style={textStyle}>Headline 2</H2>
      <H3 style={textStyle}>Headline 3</H3>
      <H4 style={textStyle}>Headline 4</H4>
      <H5 style={textStyle}>Headline 5</H5>
      <H6 style={textStyle}>Headline 6</H6>
      <P style={textStyle}>Paragraph of text</P>
      <Strong style={textStyle}>
        Strong tag defines strong emphasized text
      </Strong>
      <B style={textStyle}>B tag specifies bold text</B>
      <Em style={textStyle}>Em tag renders as emphasized text</Em>
      <I style={textStyle}>I tag is usually displayed in italic</I>
      <A style={textStyle} href='http://avocode.com'>
        This is a link
      </A>
    </View>
    </ScrollView>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  }
});
export default NachosUIDemo
