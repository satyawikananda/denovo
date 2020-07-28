import { APP_ID, APP_VERSION, OS_NAME } from "../config/base.ts"
import { ovoPost } from "./utils/request.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export default class Denovo {
    public authToken?: string
    public headers: {}
    constructor(authToken?: string){
        this.authToken = authToken
        this.headers = {
            'Content-Type': 'application/json',
            'app-id': APP_ID,
            'App-Version': APP_VERSION,
            'OS': OS_NAME
        }
    }

    login2FA(mobilePhone:string){
        const data = {
            'deviceId': v4.generate(),
            'mobile': mobilePhone
        }

        return ovoPost('v2.0/api/auth/customer/login2FA', data, this.headers)
    }

    _aditionalHeader() {
        return {
          'Authorization': this.authToken,
          ...this.headers
        }
      }
}