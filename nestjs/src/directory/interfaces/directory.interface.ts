export interface Directory {
    id?: string
    did: string
    directoryName: string
    childrenDirectories: Directory[]
}