import { createStore, combineReducers } from 'redux'
import likes from "./likes"
import foods from "./foods"

const app = combineReducers({likes, foods})

const store = createStore(app)

export default store