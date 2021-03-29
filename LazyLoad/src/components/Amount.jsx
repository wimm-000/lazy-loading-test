import React from 'react'
import {useSelector} from "react-redux"
import { selectCount } from '../store/counterSlice'

export default function Amount() {
    const count = useSelector(selectCount)
    return (
        <div className="amount">
            {count}
        </div>
    )
}
