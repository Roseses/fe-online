
export interface Tree {
    name: string
    leaf?: boolean,
    id?: string,
}

export const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
}

export interface TableData {
    [x: string]: any
}

export interface Columns { label?: string, prop?: string, type?: string, sortable?: boolean}

export interface TableProp {
    data: TableData[],
    columns: Columns[],
}
