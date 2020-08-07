import { APP_ID, APP_VERSION, OS_NAME, OS_VERSION, MAC_ADDRESS } from "../config/base.ts"
import { ovoPost, ovoGet } from "./utils/request.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { DataLoginSecurity, DataLogin2FA, DataHeaders, DataLogin2FAVerify } from "./interface/interface.ts"
export class Denovo {
    public authToken?: string
    public headers: DataHeaders
    constructor(authToken?: string){
        this.headers = {
            'Content-Type': 'application/json',
            'app-id': APP_ID,
            'App-Version': APP_VERSION,
            'OS': OS_NAME,
            'Authorization': authToken
        }
    }

    login2FA(mobilePhone:string){
        const data:DataLogin2FA = {
            'deviceId': v4.generate(),
            'mobile': mobilePhone
        }

        return ovoPost('v2.0/api/auth/customer/login2FA', data, this.headers)
            .then((data) => {
                return data.refId
            })
    }

    login2FAverify(refId: string, verificationCode: string, mobilePhone: string){
        const data:DataLogin2FAVerify = {
            'appVersion': APP_VERSION,
            'deviceId': v4.generate(),
            'macAddress': MAC_ADDRESS,
            'mobile': mobilePhone,
            'osName': OS_NAME,
            'osVersion': OS_VERSION,
            'refId': refId,
            'verificationCode': verificationCode,
            'pushNotificationId': 'FCM|f4OXYs_ZhuM:APA91bGde-ie2YBhmbALKPq94WjYex8gQDU2NMwJn_w9jYZx0emAFRGKHD2NojY6yh8ykpkcciPQpS0CBma-MxTEjaet-5I3T8u_YFWiKgyWoH7pHk7MXChBCBRwGRjMKIPdi3h0p2z7'
        }

        return ovoPost('v2.0/api/auth/customer/login2FA/verify', data, this.headers)
    }

    loginSecurity(securityCode: number, updateAccessToken: string){
        const data:DataLoginSecurity = {
            'deviceUnixTime': Math.floor(new Date().valueOf() / 1000),
            'securityCode': securityCode,
            'updateAccessToken': updateAccessToken,
            'message': ''
        }

        return ovoPost('v2.0/api/auth/customer/loginSecurityCode/verify', data, this.headers)
         .then(data => {
            this.authToken = data.token
            return data.token
         })
    }

    getUnreadHistory() {
        return ovoGet('v1.0/notification/status/all', '', this._aditionalHeader())
            .then(data => {
                return data
            })
    }

    getBudget(){
        return ovoGet('v1.0/budget/detail', '', this._aditionalHeader())
            .then(data => {
                return data
            })
    }

    getRefBank(){
        return ovoGet('v1.0/reference/master/ref_bank', '', this._aditionalHeader())
         .then(data => {
            return data
         })
    }

    getAllNotif(){
        return ovoGet('v1.0/notification/status/all', '', this._aditionalHeader())
    }

    ovoLogout() {
        return ovoGet('v1.0/api/auth/customer/logout', '', this._aditionalHeader())
    }

    _aditionalHeader() {
        return {
          'Authorization': this.authToken,
          ...this.headers
        }
      }
}