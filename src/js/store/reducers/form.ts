import { IAction } from '../interfaces'
import { actionsForm } from "../actions"
import { FormStorage } from "../../components/form/interfaces"
import { Form } from "../../components/interfaces"

const initialState: FormStorage = {
  parent: { name: '', age: '' },
  child: []
}

function submitForm(state: FormStorage, form: Form): FormStorage {
  return { ...state, parent: form.parent, child: form.child }
}

export function reducer(state = initialState, action: IAction): FormStorage {
  switch (action.type) {
    case actionsForm.SUBMIT_FORM:
      return submitForm(state, action.payload as Form)

    default:
      return { ...state }
  }
}
