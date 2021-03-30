import React from 'react'
import Module from './Module'
import {useDispatch} from "react-redux"
import { divide } from '../../store/counterSlice'

export default function Divide({name}) {
    const dispatch = useDispatch()
    const handleClick = (value) => {
        dispatch(divide(value))
    }
    return (
        <li className="module">
            <Module name={name} onClick={handleClick} />
        </li>
    )
}
