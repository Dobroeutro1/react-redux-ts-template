import React from 'react'
import { v4 as generateID } from 'uuid'
import { FormState, FormProps } from './interfaces'
import { MAX_CHILD_COUNT, patternAge, patternName } from './constants'
import { actionsForm } from '../../store/actions'
import { Child } from '../child/Child'
import btnPlus from '../../../media/btn_plus.svg'

export class Form extends React.PureComponent<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      parent: { name: '', age: '' },
      child: [],
      ready: false
    }
  }

  componentDidMount(): void {
    this.setState({ parent: this.props.parent, child: this.props.child })
  }

  componentDidUpdate(prevProps: Readonly<FormProps>): void {
    if (prevProps.child !== this.props.child) {
      this.setState({ child: this.props.child })
    }
  }

  checkReady = (): void => {
    if (this.state.parent.name.length < 1 || this.state.parent.age.length < 1) {
      this.setState({ ready: false })
      return
    }

    if (this.state.child.length > 0) {
      this.state.child.forEach((el) => {
        if (el.name.length < 1 || el.age.length < 1) {
          this.setState({ ready: false })
          return
        }

        this.setState({ ready: true })
      })
      return
    }

    this.setState({ ready: true })
  }

  onSetParent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.currentTarget
    if (id === 'age' && !patternAge.test(value) && value.length > 0) {
      return
    }
    if (id === 'name' && !patternName.test(value) && value.length > 0) {
      return
    }
    this.setState((prev) => ({ parent: { ...prev.parent, [id]: value } }), this.checkReady)
  }

  onSetChild = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, name, value } = event.currentTarget
    if (name === 'age' && !patternAge.test(value) && value.length > 0) {
      return
    }
    if (name === 'name' && !patternName.test(value) && value.length > 0) {
      return
    }
    const modifyChild = this.state.child.map((el) => {
      if (el.id === id) {
        return { ...el, [name]: value }
      }
      return { ...el }
    })
    this.setState({ child: modifyChild }, this.checkReady)
  }

  onAddChild = (): void => {
    const modifyChild = [...this.state.child]
    modifyChild.push({ id: generateID(), name: '', age: '' })
    this.setState({ child: modifyChild }, this.checkReady)
  }

  onDeleteChild = (id: string): void => {
    const modifyChild = this.state.child.filter((el) => el.id !== id)
    this.setState({ child: modifyChild }, this.checkReady)
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.dispatch(actionsForm.submitForm(this.state))
  }

  render(): React.ReactNode {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__element">
          <h1 className="form__title">Персональные данные</h1>
          <div className="form-group">
            <label htmlFor="name" className="form-group__label">Имя</label>
            <input className="form-group__input" type="text" id="name" value={this.state.parent.name} onChange={this.onSetParent} />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="form-group__label">Возраст</label>
            <input className="form-group__input" type="text" id="age" value={this.state.parent.age} onChange={this.onSetParent} />
          </div>
        </div>

        <div className="form__element">
          <div className="form__header">
            <h1 className="form__title form__title_header">Дети (макс. 5)</h1>
            {this.state.child.length > MAX_CHILD_COUNT ? null : <button className="form__btn" onClick={this.onAddChild}>
              <img src={btnPlus} alt="plus" className="form__btn-img" />
              <p className="form__btn-text">Добавить ребенка</p>
            </button>}
          </div>
          {this.state.child.map((child) => <Child
            key={child.id}
            onDeleteChild={this.onDeleteChild}
            onChange={this.onSetChild}
            {...child}
          />)}
        </div>
        <button className="form__btn btn_common" type="submit" disabled={!this.state.ready}>Сохранить</button>
      </form>
    )
  }
}
