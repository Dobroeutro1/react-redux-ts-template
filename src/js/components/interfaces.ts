export interface ParentData {
  name: string;
  age: string;
}

export interface ChildData extends ParentData {
  id: string
}

export interface Form {
  parent: ParentData
  child: ChildData[]
}
