import React from 'react'
import FoodList from './FoodList'
import LikeCounter from './LikeCounter'

const App = React.createClass({
  render() {
    return(
      <div>
        <FoodList/>
        <LikeCounter/>
      </div>
    )
  }
})

export default App
