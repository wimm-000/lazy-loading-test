import React from 'react'
import Module from './Module'
import {useDispatch} from "react-redux"
import { substract } from '../../store/counterSlice'

export default function Substract({name}) {
    const dispatch = useDispatch()
    const handleClick = (value) => {
        dispatch(substract(value))
    }
    return (
        <li className="module">
            <Module name={name} onClick={handleClick} />
        </li>
    )
}
