import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as containers from '../../store/containers'
import { SectionsProps } from './interfaces'
import { SelectedPage } from '../sidebar/constants'

export class Sections extends React.PureComponent<SectionsProps, never> {
  render(): React.ReactNode {
    return (
      <div className="sections">
        <Redirect from="/" to={`/${SelectedPage.Form}`} />
        <Switch>
          <Route path={`/${SelectedPage.Form}`} component={containers.FormContainer} />
          <Route path={`/${SelectedPage.Preview}`} component={containers.PreviewContainer}/>
        </Switch>
      </div>
    )
  }
}
