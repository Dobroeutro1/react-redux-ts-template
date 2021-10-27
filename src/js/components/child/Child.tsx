import React from 'react'
import { ChildProps } from './interfaces'

export class Child extends React.PureComponent<ChildProps, never> {
  render(): React.ReactNode {
    return (
      <div className="form-group_wrap">
        <div className="form-group">
          <label className="form-group__label">Имя</label>
          <input
            className="form-group__input"
            type="text"
            onChange={(event) => this.props.onChange(event)}
            value={this.props.name}
            id={this.props.id}
            name="name"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label">Возраст</label>
          <input
            className="form-group__input"
            type="text"
            onChange={(event) => this.props.onChange(event)}
            value={this.props.age}
            id={this.props.id}
            name="age"
          />
        </div>
        <button className="form-group__btn" onClick={() => this.props.onDeleteChild(this.props.id)}>Удалить</button>
      </div>
    )
  }
}
