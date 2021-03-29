import React from 'react'
import Module from './Module'
import {useDispatch} from "react-redux"
import { add } from '../../store/counterSlice'

export default function Add({name}) {
    const dispatch = useDispatch()
    const handleClick = (value) => {
        dispatch(add(value))
    }
    return (
        <li className="module">
            <Module name={name} onClick={handleClick} />
        </li>
    )
}
