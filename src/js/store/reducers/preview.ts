import { IAction } from '../interfaces'
import { PreviewStorage } from "../../components/preview/interfaces"

const initialState: PreviewStorage = {
  parent: { name: '', age: null },
  child: []
}

export function reducer(state = initialState, action: IAction): PreviewStorage {
  switch (action.type) {
    default:
      return { ...state }
  }
}
