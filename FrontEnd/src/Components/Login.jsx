import { useState } from "react"


export const Form = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [mistake, setMistake] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name == "" || password ==""){
            setMistake(true)
            return 
        }
        setMistake(false)
    }

    return(
        <>

        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button>Iniciar Sesion</button>
            <button>Registrate</button>
        </form>

        {mistake && <p>Faltan campos por completar </p>}

        </>
    )
}