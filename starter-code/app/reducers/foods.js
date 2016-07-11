// foods reducer
const foods = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      // return an entirely new list of foods using the spread operator
      return [ ...state,
        { 
          name: action.name,
          yumminess: action.yumminess
        }
      ]
    default:
      return state
  }
}

export default foods