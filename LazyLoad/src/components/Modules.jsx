import React from 'react'
import { useSelector } from 'react-redux';
import { selectModules } from '../store/moduleSlice';
import { useDispatch } from 'react-redux';
import SwitchButton from './SwitchButton';
import {toggle} from '../store/moduleSlice'

export default function Modules() {
    const modules = useSelector(selectModules)
    const dispatch = useDispatch()
    const handleToogle = (name) => {
        dispatch(toggle(name))
    }
    return (
        <ul className="modules horizontal-flow">
            {
                modules.map(({name, isActive}, index) => <SwitchButton key={`switch-${index}`} name={name} isActive={isActive} onToggle={handleToogle} />)
            }
        </ul>
    )
}
