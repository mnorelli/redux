import React from 'react'
import store from '../reducers/rootReducer'
import LikeCounter from './likeCounter'
import FoodList from './foodList'

const App = React.createClass({
  render() {
    return(
      <div>
        <FoodList foods={store.getState().foods}/>
        <LikeCounter likeCount={store.getState().likes}/>
      </div>
    )
  }
})

export default App