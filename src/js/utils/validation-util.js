
import { isString } from './type-util';

const urlRegex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const alphaNumericRegex = /^[a-zA-Z0-9\s]+$/;
const spaceRegex = /^\S*$/;
const mobileRegex = /^[1-9]{1}[0-9]{3,14}$/;
const areaCodeRegex = /^[1-9]{1}[0-9]{3,14}$/;
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

/**
 * Returns whether a value is a valid URL.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isValidUrl(val) {
	return isString(val) && urlRegex.test(val);
}

export function isValidateYoutubeUrl(val) {
	return isString(val) && youtubeRegex.test(val);
}

/**
 * Returns whether a value is a valid Email format.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isValidEmail(val) {
	return isString(val) && emailRegex.test(val);
}

export function isValidAlphaNumeric(val) {
	return isString(val) && alphaNumericRegex.test(val);
}

export function isValidSpace(val) {
	return isString(val) && spaceRegex.test(val);
}

export function isValidAreaCode(val) {
	return isString(val) && areaCodeRegex.test(val);
}

export function isValidMobile(val) {
	return isString(val) && mobileRegex.test(val);
}
export function isImage(val) {
	return val.includes('.png');
}
