import "./Contato.css"
import React, { useState } from 'react'

function Contato(){

    const [nome,setNome] = useState("")
    function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setNome(e.target.value)
    }

    const [email,setEmail] = useState("")
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const [mensage,setMensage] = useState("")
    function mudaMensage(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setMensage(e.target.value)
    }

    return(
            <>
            <div className="formulario">
            <div className="form-container">
                <form className="form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input className='name' type="text" onChange={mudaNome} name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className='email' type="text" onChange={mudaEmail} name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">How Can We Help You?</label>
                    <input className='mensage' type="text" onChange={mudaMensage} name="mensage" id="mensage"/>
                </div>
                    <button className="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
            </div>

            <div className="textos">
                <p className='texto_digitado'>Name: {nome}</p>
                <p className='texto_digitado'>Email: {email}</p>
                <p className='texto_digitado'>Mensage: {mensage}</p>
            </div>
            </>
        )
    }
    export default Contato