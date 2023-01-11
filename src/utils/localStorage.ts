import { NimblUser } from './../types';
import { GoogleLoginResponse } from 'react-google-login';
const GOOGLE_AUTH_INFO = 'GOOGLE_AUTH_INFO';
const NIMBL_USER_INFO = 'NIMBL_USER_INFO';

/**
 * It gets a value from localStorage, parses it as JSON if it's a string, and returns the parsed value
 * or null if it's not a string
 * @param {string} key - The key to store the value under.
 * @returns {any} The value parsed or null
 */
const getValueFromStorage = (key: string) => {
	const value = localStorage.getItem(key);
	if(value){
		try {
			return JSON.parse(value);	
		} catch (error) {
			return null;	
		}
	}
	return null;
};

/**
 * It gets the NimblUser object from the browser's local storage
 * @returns {NimblUser} User information.
 */
export const getNimblUser = () => {
	let storageValue = getValueFromStorage(NIMBL_USER_INFO);
	if(storageValue){
		const nimblUser:NimblUser = storageValue;
		return nimblUser;
	}
	return null;
};

/**
 * It gets the Google auth info from the local storage
 * @returns {GoogleLoginResponse} The value of the storageValue variable.
 */
export const getGoogleAuthInfo = () => {
	let storageValue = getValueFromStorage(GOOGLE_AUTH_INFO);
	if(storageValue){
		const authInfo:GoogleLoginResponse = storageValue;
		return authInfo;
	}
	return null;
};

export const saveGoogleAuthInfo = (authInfo: GoogleLoginResponse) => {
	localStorage.setItem(GOOGLE_AUTH_INFO, JSON.stringify(authInfo));
};

export const saveUserInfo = (nimblUser: NimblUser) => {
	localStorage.setItem(NIMBL_USER_INFO, JSON.stringify(nimblUser));
};