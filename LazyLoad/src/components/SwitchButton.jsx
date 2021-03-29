import React from 'react'

export default function SwitchButton({name, isActive, onToggle}) {
    const className = isActive ? "switch active" : "switch"
    return (
        <button className={className}  onClick={e => onToggle(name)}>
            {name}
        </button>
    )
}
