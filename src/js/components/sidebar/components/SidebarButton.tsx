import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarButtonProps } from '../interfaces'

export class SidebarButton extends React.PureComponent<SidebarButtonProps, never> {
  render(): React.ReactNode {
    return (
      <Link to={`/${this.props.url}`} className="sidebar__button">
        <p className="sidebar__button_text">{this.props.pageName}</p>
      </Link>
    )
  }
}
