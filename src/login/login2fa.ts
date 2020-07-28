import Denovo from "../index.ts"
import { ovoPost } from "../utils/request.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export default class Login2Fa extends Denovo {
    login2FA(mobilePhone:string){
        let data = {
            'deviceId': v4.generate(),
            'mobile': mobilePhone
        }

        return ovoPost('v2.0/api/auth/customer/login2FA', data, this.headers)
    }
}