export interface DataHeaders {
    'Content-Type': string;
    'app-id': string;
    'App-Version': string;
    'OS': string;
}

export interface DataLogin2FA {
    'deviceId': string;
    'mobile': string;
}

export interface DataLoginSecurity {
    'deviceUnixTime': any;
    'securityCode': number;
    'updateAccessToken': string;
    'message': string
}

export interface DataLogin2FAVerify {
    'appVersion': string;
    'deviceId': string;
    'macAddress': string;
    'mobile': string;
    'osName': string;
    'osVersion': string;
    'refId': string;
    'verificationCode': string;
    'pushNotificationId': string
}