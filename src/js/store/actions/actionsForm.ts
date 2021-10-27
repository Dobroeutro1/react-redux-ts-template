import { IAction } from '../interfaces'
import { Form } from "../../components/interfaces"
// Import { ADD_CHILD } from './constants'

export class Actions {
  readonly SUBMIT_FORM = 'SUBMIT_FORM'

  submitForm = (form: Form): IAction => ({ type: this.SUBMIT_FORM, payload: form })
}
