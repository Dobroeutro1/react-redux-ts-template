import { connect } from 'react-redux'
import { Storage } from './interfaces'
import { Form } from '../components/form/Form'
import { FormStorage } from "../components/form/interfaces"
import { PreviewStorage } from "../components/preview/interfaces"
import { Preview } from "../components/preview/Preview"

export const FormContainer = connect(form)(Form),
  PreviewContainer = connect(preview)(Preview)

function form(state: Storage): FormStorage {
  return { ...state.form }
}

function preview(state: Storage): PreviewStorage {
  return { ...state.preview, child: state.form.child, parent: state.form.parent }
}
