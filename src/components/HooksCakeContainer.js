import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes (Hooks) - {numOfCakes}</h2>
            <button onClick={() =>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer