import React,{Component} from 'react'
import {ActivityIndicator,View,StyleSheet,ScrollView,Image,Text,KeyboardAvoidingView,TouchableWithoutFeedback,Platform} from 'react-native'
import {Theme,Label,Button,Checkbox,Input,Select,Stepper,SearchInput,Badge,Popover,Overlay,Toast,ListRow,TransformView} from 'teaset';

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:Platform.OS==='ios'?20:0
  }
});

class CustomToast {
static customKey = null;

static show(text) {
  if (CustomToast.customKey) return;
  CustomToast.customKey = Toast.show({
    text: text,
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'top',
    duration: 1000000,
  });
}

static hide() {
  if (!CustomToast.customKey) return;
  Toast.hide(CustomToast.customKey);
  CustomToast.customKey = null;
}
}

export default class TeasetDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      checked:false,
      value:null,
      valueCustom:null
    };
    this.items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ];
    this.customItems = [
  {
    text: 'Long long long long long long long',
    value: 1,
  },
  {
    text: 'Short',
    value: 2,
  }
];
  }

  showPic= async (e)=>{

    const {x,y,width,height}=this.fromView||{x:0,y:0,width:0,height:0};
      let overlayView = (
        <Overlay.PopView
          style={{alignItems: 'center', justifyContent: 'center'}}
          overlayOpacity={1}
          type='custom'
          customBounds={{x, y, width, height}}
          ref={v => this.customPopView = v}
          >
          <TouchableWithoutFeedback onPress={() => this.customPopView && this.customPopView.close()}>
          <View>
              <Image source={require('../../assets/NavLogo.png')} resizeMode='cover' />
          </View>
          </TouchableWithoutFeedback>
        </Overlay.PopView>
      );
      await Overlay.show(overlayView);
  }
  showPopOver=(e)=>{
    this.fromViewPopOver.measure((x, y, width, height) => {
  let popoverStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
  };
  let fromBounds = {x, y, width, height};
  let overlayView = (
    <Overlay.PopoverView
      popoverStyle={popoverStyle}
      fromBounds={fromBounds}
      direction='down'
      align='center'
      directionInsets={20}
      showArrow={true}
    >
      <Label style={{color: '#fff'}} size='lg' text='Popover Overlay' />
    </Overlay.PopoverView>
  );
  Overlay.show(overlayView);
});
  }
  render(){
    let blackStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12,
};
let shadowStyle = {
  shadowColor: '#777',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.5,
  shadowRadius: 2,
};
let overlayView = (
  <Overlay.View
    style={{alignItems: 'center', justifyContent: 'center'}}
    modal={true}
    overlayOpacity={0}
    ref={v => this.overlayView = v}
    >
    <View style={{backgroundColor: '#333', padding: 40, borderRadius: 15, alignItems: 'center'}}>
      <Label style={{color: '#eee'}} size='xl' text='Overlay' />
      <View style={{height: 20}} />
      <Button title='Close' onPress={() => this.overlayView && this.overlayView.close()} />
    </View>
  </Overlay.View>
);
let overlayView1= (
  <Overlay.View
    style={{alignItems: 'center', justifyContent: 'center'}}
    modal={false}
    overlayOpacity={0}
    >
    <View style={{backgroundColor: '#fff', padding: 40, borderRadius: 15, alignItems: 'center'}}>
      <Label style={{color: '#000'}} size='xl' text='Overlay' />
    </View>
  </Overlay.View>
);
let overlayView2 = (
  <Overlay.PullView side='bottom' modal={false}>
    <View style={{backgroundColor: '#fff', minWidth: 300, minHeight: 260, justifyContent: 'center', alignItems: 'center'}}>
      <Label type='title' size='xl' text='Pull Overlay' />
    </View>
  </Overlay.PullView>
);
let overlayView3 = (
  <Overlay.PopView
    style={{alignItems: 'center', justifyContent: 'center'}}
    >
    <View style={{backgroundColor: '#fff', minWidth: 260, minHeight: 180, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
      <Label type='title' size='xl' text='Pop Overlay' />
    </View>
  </Overlay.PopView>
);

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        contentContainerStyle={{flex:1}}
        >
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          style={{flex:1}}
          >
            <TransformView
              style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}
              minScale={0.5}
              maxScale={2}
          

            >
              <Image style={{width: 375, height: 300}} resizeMode='cover' source={require('../../assets/NavLogo.png')} />
            </TransformView>
            <Button
              title="show Popover"
              size='lg'
              onPress={this.showPopOver}
              ref={ref=>this.fromViewPopOver=ref}
            />

          <Label text='Hello world' type='detail'/>
          <Label type='title' size='xl' text='Hello world' />
          <Label type='title' size='lg' text='Hello world' />
          <Label type='title' size='md' text='Hello world' />
          <Label type='title' size='sm' text='Hello world' />
          <Label type='title' size='xs' text='Hello world' />
          <Label type='default' size='lg' text='Hello world' />
          <Label type='danger' size='lg' text='Hello world' />
          <Label style={{color: '#8a6d3b', fontSize: 16}} text='Hello world'/>
          <Button title='Default' onPress={() => alert('Hello world')} />
          <Button type='link' size='xs' title='Primary' />
          <Button  disabled type='primary' size='xl' title='Primary' />
          <Button style={{backgroundColor: '#fcf8e3', borderColor: '#8a6d3b'}}>
            <Image style={{width: 16, height: 16, tintColor: '#8a6d3b'}} source={require('../../assets/NavLogo.png')} />
            <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='Search' />
          </Button>
          <Checkbox
            title='Default'
            checked={this.state.checked}
            onChange={checked => this.setState({checked})}
            size='lg'
            titleStyle={{color:!this.state.checked?'#333':'red'}}
            checkedIcon={require('../../assets/NavLogo.png')}
            checkedIconStyle={{tintColor:'red'}}
            />
            <Input style={{width: 200}} />
            <Input style={{width: 200}}
              size='lg'
              value={this.state.value}
              onChangeText={text => this.setState({value: text})}
              />
              <Input style={{width: 200}} editable={false} value={"lorem"}/>
              <Button
                title="Toast message "
                size='md'
                onPress={e=>Toast.stop(`hahah\nahhha`)}
              />
              <Button
                title="Custom Toast "
                size='md'
                onPress={e=>CustomToast.customKey?CustomToast.hide():CustomToast.show('Toast custom')}
              />
              <Input style={{width: 200}} disabled={true} value="lorem"/>
              <Input
                style={{ backgroundColor: '#fcf8e3', borderColor: '#ddd', color: '#8a6d3b', textAlign: 'right'}}
                value={this.state.valueCustom}
                onChangeText={text => this.setState({valueCustom: text})}
                />
                <Select
                  style={{width: 200}}
                  value={this.state.value}
                  items={this.items}
                  placeholder='Select item'
                  pickerTitle='Default'
                  placeholderTextColor='#ccc'
                  onSelected={(item, index) => this.setState({value: item})}
                  />
                  <Select
                    pickerType='pull'
                    style={{width: 200, backgroundColor: '#fcf8e3', borderColor: '#8a6d3b'}}
                    value={this.state.valueCustom}
                    valueStyle={{flex: 1, color: '#8a6d3b', textAlign: 'right'}}
                    items={this.customItems}
                    getItemValue={(item, index) => item.value}
                    getItemText={(item, index) => item.text}
                    iconTintColor='#8a6d3b'
                    placeholder='Select item'
                    pickerTitle='Custom'
                    onSelected={(item, index) => this.setState({valueCustom: item.value})}
                    />
                    <Stepper defaultValue={1} min={1} max={100} />
                    <Stepper
                      style={{borderWidth:StyleSheet.hairlineWidth}}
                      value={this.state.valueCustom}
                      valueStyle={{color: '#8a6d3b',flex:1,paddingVertical:4}}
                      min={0}
                      max={100}
                      subButton={
                        <View style={{backgroundColor: '#fcf8e3', borderColor: '#8a6d3b', borderWidth: 1, borderRadius:4, width: 20, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                          <Text style={{color: '#8a6d3b'}}>－</Text>
                        </View>
                      }
                      addButton={
                        <View style={{backgroundColor: '#fcf8e3', borderColor: '#8a6d3b', borderWidth: 1, borderRadius:4, width: 20, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                          <Text style={{color: '#8a6d3b'}}>＋</Text>
                        </View>
                      }
                      showSeparator={false}
                      onChange={v => this.setState({valueCustom: v})}
                      />
                      <SearchInput
                        style={{width: 200, height: 40, backgroundColor: '#fcf8e3', borderColor: '#8a6d3b'}}
                        inputStyle={{color: '#8a6d3b', fontSize: 18}}
                        iconSize={15}
                        value={this.state.valueCustom}
                        placeholder='Custom'
                        placeholderTextColor='#aaa'
                        onChangeText={text => this.setState({valueCustom: text})}

                        />


                      <SearchInput style={{width: 200}} placeholder='Enter text' />

                      <Badge count={6} />
                      <Badge type='square' count={68} />
                      <Badge type='dot' />
                      <Badge style={{backgroundColor: '#777', paddingLeft: 0, paddingRight: 0}}>
                      <Text style={{color: '#fff'}}>$</Text>
                    </Badge>
                    <View style={{width:60,padding:8}}>
                      <Text>哈哈</Text>
                      <Badge count={101}
                        maxCount={100} style={{position:'absolute',right:-16,top:-16}}/>
                    </View>
                    <Popover arrow='bottom'>
                      <Label text='Popover' />
                    </Popover>
                    <Popover style={[blackStyle, shadowStyle]} arrow='bottomLeft' paddingCorner={16}>
                      <Label text='Popover' style={{color:'#fff'}}/>
                    </Popover>
                    <Button size='lg' onPress={e=>Overlay.show(overlayView)}
                      title="ShowOverLay(全透明模态)"
                    />
                    <Button size='lg' onPress={e=>Overlay.show(overlayView1)}
                      title="ShowOverLay(半透明非模态)"
                    />
                    <Button size='lg' onPress={e=>Overlay.show(overlayView2)}
                      title="ShowOverLay(Pull from bottom)"
                    />
                    <Button size='lg' onPress={e=>Overlay.show(overlayView3)}
                      title="ShowOverLay(Popup)"
                    />
                    <View
                      onLayout={e=>this.fromView=e.nativeEvent.layout}
                      onStartShouldSetResponder={returnTrue}
                      onMoveShouldSetResponder={returnFalse}
                      onResponderRelease={this.showPic}
                      >
                      <Image source={require('../../assets/NavLogo.png')}/>
                    </View>
                    <ListRow
                      title='Swipe able'
                      swipeActions={[
                        <ListRow.SwipeActionButton title='Cancel' />,
                        <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')}/>,
                      ]}
                      />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
