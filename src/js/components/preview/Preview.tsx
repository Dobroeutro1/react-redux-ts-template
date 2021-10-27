import React from 'react'
import { PreviewProps } from './interfaces'

export class Preview extends React.PureComponent<PreviewProps, never> {
  renderParent(): React.ReactNode {
    if (this.props.parent.name.length < 1 || this.props.parent.age.length < 1) {
      return null
    }

    return (
      <div className="preview__parent">
        <h1 className="preview__title">Персональные данные</h1>
        <p className="preview__data">{this.props.parent.name}, {this.props.parent.age} лет</p>
      </div>
    )
  }

  renderChild(): React.ReactNode {
    if (this.props.child.length < 1) {
      return null
    }

    return (
      <div className="preview__child">
        <h1 className="preview__title">Дети</h1>
        {this.props.child.map((el) => <p key={el.id} className="preview__data preview__data_child">{el.name}, {el.age} лет</p>)}
      </div>
    )
  }

  render(): React.ReactNode {
    return (
      <div className="preview">
        {this.renderParent()}
        {this.renderChild()}
      </div>
    )
  }
}
