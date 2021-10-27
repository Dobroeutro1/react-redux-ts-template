import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter } from "react-router-dom"
import { Sidebar } from "./components/sidebar"
import { Sections } from "./components/sections"
import '../css/index.css'

if (document.getElementById('root')) {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        <Sidebar />
        <Sections store={store} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

