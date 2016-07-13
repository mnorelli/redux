"use strict"


import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { createStore, combineReducers } from 'redux'

// const likeButton = document.getElementById("like-button")
// const dislikeButton = document.getElementById("dislike-button")
// const totalLikes = document.getElementById("total-likes")

// like counter component
const LikeCounter = React.createClass({
  like() {
    store.dispatch({type: 'LIKE'})
  },
  dislike() {
    store.dispatch({type: 'DISLIKE'})
  },
  render() {
    return (
      <div>
        <h3>{store.getState().likes}</h3>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
      </div>
    )
  }
})

// Food list React component
const FoodList = React.createClass({
  // set initial state
  getInitialState() {
    return {
      name: null
    }
  },
  // update state when the input is changed
  handleNameChange(e) {
    this.setState({name: e.target.value})
  },
  // form submit function
  addFood(e) {
    e.preventDefault()
    store.dispatch({
      type: 'ADD_FOOD',
      name: this.state.name
    })
    // clear form
    this.setState({name: null})
  },
  // initial render function
  render() {
    return(
      <div>
        <form onSubmit={this.addFood}>
          <input placeholder="Name" value={this.state.name} onChange={this.handleNameChange} autoFocus />
          <button>Add Food</button>
        </form>
        {/* list of the foods */}
        <ul>
          {store.getState().foods.map((food, index) =>
            <li key={index}>
              {food.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
})

// this is the likes reducer
const likes = (state = 0, action) => {
  switch(action.type) {
    case 'LIKE':
      return state + 1
    case 'DISLIKE':
      return state - 1
    default:
      return state
  }
}

//foods reducer
const foods = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      // return an entirely new list of foods using the spread operator
      return [
        ...state,
        {
          name: action.name
        }
      ]
    default:
      return state
  }
}

// pack separate reducers into a single one for the application
const app = combineReducers({foods,likes})
// use the single reducer to generate our single application-wide store
const store = createStore(app)


// update the DOM with the new state, using ES6 code
const renderView = () => {
  ReactDOM.render(
    <LikeCounter/>,
    document.getElementById("like-counter")
  )
  ReactDOM.render(
    <FoodList/>,
    document.getElementById("food-list")
  )
}

// re-render every time the store is updated
store.subscribe(renderView)

// called once for initialization
renderView()

// // make the like button dispatch a "LIKE" action
// likeButton.addEventListener('click', () => {
//   store.dispatch({type: 'LIKE'})
// })

// // make the dislike button dispatch a "DISLIKE" action
// dislikeButton.addEventListener('click', () => {
//   store.dispatch({type: 'DISLIKE'})
// })