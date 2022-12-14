import {Entitlement} from "../../common/interfaces/entitlement.interface";

export interface Group {
    _id?: string
    groupName: string
    directoryId: string
    users: string[]
    entitlements: Entitlement[]
}