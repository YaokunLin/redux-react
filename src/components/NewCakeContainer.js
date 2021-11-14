import React, { useState } from 'react'
//import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../myRedux/cakeRedux'

function NewCakeContainer() {
  const [number, setNumber] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}

export default NewCakeContainer

/*
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)
*/