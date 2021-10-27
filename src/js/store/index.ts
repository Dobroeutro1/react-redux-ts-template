import { applyMiddleware, createStore } from "redux"
import { actionFn } from "./middlewares"
import reducer from "./reducers"

export const store = applyMiddleware(actionFn)(createStore)(reducer)
