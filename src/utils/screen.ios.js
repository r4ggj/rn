/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 *
 * 因为一般的设计稿都是以iphone6为基础来设计的，所以这里以iPhone6为基础写这个工具类，
 * 当然如果你的不是，可以更改.defaultPixelRatio改成你用的设备像素就好了。
 */

import {
	Dimensions,
	PixelRatio,
	Platform
} from 'react-native'

let pixelRatio = PixelRatio.get();
export const _1px=1/pixelRatio;

export const deviceWidth=Dimensions.get('window').width;

export const deviceHeight=Dimensions.get('window').height;

export const fontScale=PixelRatio.getFontScale();

const defaultPixel = 2;                           //iphone6的像素密度
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;

const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例

export function scaleSize(size: number) {
	size = Math.round(size * scale + 0.5);
	return size / defaultPixel;
}
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size: number) {
	size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
	return size / defaultPixel;
}