import { useState } from "react";

export default function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function evento(e) {
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail () {
        setUserEmail("")
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit" onClick={evento}>Clique</button>
                {userEmail &&(
                    <div>
                        <p>O e-mail do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}