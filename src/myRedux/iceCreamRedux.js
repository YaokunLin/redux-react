const BUY_ICECREAM = 'BUY_ICECREAM'
//Actions
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

//Reducers
const initialState = {
  numOfIceCreams: 20
}

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}