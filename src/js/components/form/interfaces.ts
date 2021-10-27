import { IProps } from "../../store/interfaces"
import { ParentData, ChildData } from '../interfaces'

export interface FormStorage {
  parent: ParentData;
  child: ChildData[];
}

export interface FormProps extends IProps {
  parent: ParentData;
  child: ChildData[];
}

export interface FormState {
  parent: ParentData;
  child: ChildData[];
  ready: boolean
}
