import React from 'react'
import Module from './Module'
import {useDispatch} from "react-redux"
import { multiply } from '../../store/counterSlice'

export default function Multiply({name}) {
    const dispatch = useDispatch()
    const handleClick = (value) => {
        dispatch(multiply(value))
    }
    return (
        <li className="module">
            <Module name={name} onClick={handleClick} />
        </li>
    )
}
