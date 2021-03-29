import React, { useState } from 'react'

export default function Module({name, onClick}) {
    const [amount, setAmount] = useState(0)
    return (
        <div class="basic-operator flow">
            <h3> {name}/ Amount</h3>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
            <button onClick={(e => {
                onClick(Number(amount))
                setAmount(0)
            })}>Apply</button>
        </div>
    )
}
