import { useState } from "react";

export default function Estado () {
    const [name, setName] = useState('Lazaro')
    return (
        <div>
            <p>Olá {name}</p>
            <button onClick={()=>setName("Lázaro")}>Mudar Estado</button>
        </div>
    )
}