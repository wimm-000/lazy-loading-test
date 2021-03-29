import React, { Suspense, useEffect, useState, lazy } from 'react'
import {useSelector} from "react-redux"
import {
    selectModules
} from '../store/moduleSlice';


const importModule = moduleName =>
    lazy(() =>
      import(`./modules/${moduleName}`)
        .catch(() => console.log('Error in importing'))
);

export default function ActiveModules() {
    const modules = useSelector(selectModules)
    const [activeModules, setActiveModules] = useState([])
    
    async function loadModule(filtered, callback) {
        const promise = filtered.map(async module => {
            const CurrentModule = await importModule(module.name)
            return <CurrentModule key={CurrentModule.name} name={module.name} />
        })
        Promise.all(promise).then(callback)
    }

    useEffect(() => {
        const filteredModules = modules.filter(({isActive}) => isActive )
        loadModule(filteredModules, setActiveModules)
    }, [modules])
    return (
        <ul className="active-modules">
            {activeModules.map((moduleComponent, index) => <Suspense key={`module-${index}`} fallback="Loading modules">
                {moduleComponent}
            </Suspense>)}
        </ul>
    )
}
