let RNImagePicker = require('react-native-image-picker');

export default class ImagePicker{
  static  launchCamera(options,callback){
    ImagePicker.launchCamera(Object.assign(ImagePicker.DEFAULT_OPTIONS,options),(response)=>ImagePicker.handleResult(response,callback));
  }
  static launchImagePicker(options,callback){
    ImagePicker.launchImageLibrary(Object.assign(ImagePicker.DEFAULT_OPTIONS,options,{mediaType:'photo'}),(response)=>ImagePicker.handleResult(response,callback));
  }
  static launchVideoPicker(options,callback){
    ImagePicker.launchImageLibrary(Object.assign(ImagePicker.DEFAULT_OPTIONS,options,{mediaType:'video'}),(response)=>ImagePicker.handleResult(response,callback));
  }

  static handleResult(response,callback){
    if (response.didCancel) {

    }
    else if (response.error) {
      alert('提示','打开相机出错');
    }
    else {
       callback(response);
    }
  }

  static DEFAULT_OPTIONS={
    cameraType:"back",
    quality:1,
    videoQuality:'high',
    noData:false,
    maxWidth:undefined,
    maxHeight:undefined,
    durationLimit:undefined,
    rotation:undefined,
    allowsEditing:true,
    storageOptions:undefined,
    permissionDenied:{
      title:'提示',
      text:'没有权限访问您的设备的相机或相册权限，请到手动开启访问相机和相册权限后再试',
      reTryTitle:'再试一次',
      okTitle:'确定'
    }
  };
}
