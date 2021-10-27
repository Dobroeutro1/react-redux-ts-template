import { ParentData, ChildData } from '../interfaces'

export interface PreviewStorage {
  parent: ParentData;
  child: ChildData[];
}

export interface PreviewProps {
  parent: ParentData;
  child: ChildData[];
}
