export interface Login2Fa {
    readonly refId: string
}

export interface DataBody {
    readonly deviceId: string,
    readonly mobilePhone: string
}