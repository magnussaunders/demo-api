export interface User {
    id?: string
    uid: string
    firstName: string
    lastName: string
    preferredName: string
    gender: string
    dateOfBirth: Date
    parentContainer: string
    roles: string[]
    entitlements: [{
        containerId: string
        accessLevel: string
    }]
}