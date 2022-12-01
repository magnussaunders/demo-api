export interface Directory {
    id?: string
    directoryName: string
    childrenDirectories: Directory[]
}