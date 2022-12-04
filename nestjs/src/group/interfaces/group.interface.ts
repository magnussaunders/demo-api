import {User} from "../../user/interfaces/user.interface";
import {Entitlement} from "../../common/interfaces/entitlement.interface";

export interface Group {
    _id?: string
    groupName: string
    directoryId: string
    user: User[]
    entitlements: Entitlement[]
}