import React from 'react'
import { SidebarButton } from './components/SidebarButton'
import { SelectedPage } from './constants'
import logo from '../../../media/logo.svg'

export class Sidebar extends React.PureComponent<{}, never> {
  render(): React.ReactNode {
    return (
      <div className="sidebar">
        <img src={logo} className="sidebar__logo" alt="logo" />
        <div className="sidebar__sections">
          <SidebarButton pageName="Форма" url={SelectedPage.Form} />
          <SidebarButton pageName="Превью" url={SelectedPage.Preview} />
        </div>
      </div>
    )
  }
}
