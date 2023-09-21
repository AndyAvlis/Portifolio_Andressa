import "./Main.css"
import React, { useState } from 'react'
import Projeto from "../projeto/Projeto"


type ProjetosType = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}

function Main() {

    const [texto,setTexto] = useState("")

    const projetos:ProjetosType[] = [
        {
            id: 1,
            titulo:"Plantinhas",
            sinopse:'Plantinhas com flores',
            imagem:"/4.png"
        },
        {
            id: 2,
            titulo:"Quartinho",
            sinopse:'Quartinho em 3D',
            imagem:"/Room.png"
        },
        {
            id: 3,
            titulo:"Stephany",
            sinopse:'Garota fofa',
            imagem:"/Stephany.png"
        },
        {
            id: 4,
            titulo:"Clara",
            sinopse:'Garota com fundo vermelho',
            imagem:"/1.png"
        },
        {
            id: 5,
            titulo:"Blue Girl",
            sinopse:'Desenho azul',
            imagem:"/2.png"
        },
        {
            id: 6,
            titulo:"Pruple Mermaid",
            sinopse:'Desenho roxo',
            imagem:"/3.png"
        },
        {
            id: 7,
            titulo:"Gnominho",
            sinopse:'Gnomo e uma flor',
            imagem:"/7.png"
        },
        {
            id: 8,
            titulo:"Rose",
            sinopse:'Garota fofa de vermelho',
            imagem:"/5.png"
        },
        {
            id: 9,
            titulo:"YuYang",
            sinopse:'Garota com vintiligo',
            imagem:"/6.png"
        },
        {
            id: 10,
            titulo:"Rain",
            sinopse:'Personagem em 3D',
            imagem:"/Rain.png"
        },
        {
            id: 11,
            titulo:"YuYang Full Body",
            sinopse:'Garota com vintiligo corpo inteiro',
            imagem:"/8.png"
        },
        {
            id: 12,
            titulo:"Sophie",
            sinopse:'Garota com fundo rosa',
            imagem:"/9.png"
        }
    ]

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }

    return(
        <main>
            <div className="bio">
                <div className="eu"></div>
                <div className="texto">
                    <p>Olá! Meu nome é Andressa Miranda, e sou apaixonada por tecnologia, programação e desenvolvimento de software. Sou graduado em Ciência da Computação, com ênfase na engenharia de software. Tenho trabalhado profissionalmente há cerca de 5 anos no setor de TI, tendo adquirido experiência em diversas plataformas e linguagens diferentes. </p>
                    <p>Gostaria muito que você visitasse meu site para conhecer melhor o meu trabalho: aqui você encontrará alguns dos projetos que já realizei ao longo dos anos; também estaremos sempre atualizando conteúdos sobre as principais tendências do mercado da tecnologia para manterem-se informados sobre notícias relevantes relacionadas à indústria digital. </p>
                    <p>Esperamos que possam se divertir explorando todas as coisas interessantes destinadas a desenvolvedores web/software aqui no meu site! Se tiver alguma dúvida ou precisar conversar um pouco mais sobre qualquer assunto relacionado à Tecnologias da Informacao (TI), fique à vontade para entrar em contato connosco - estaremos felizes em responder quaisquer perguntas!</p>
                </div>
            </div>
            <div className="trabalho">
                <div className="textoD">
                    <h1>Meus Trabalhos</h1>
                    <p>Eu adoro trabalhar com design! É uma das minhas paixões. Desde que comecei a me interessar por design, tenho feito vários projetos e cada um deles tem sido muito gratificante para mim. </p>
                    <a href="#">Saiba Mais</a>
                    <div className="pesquisa">
                        <input className='barraPesquisa' type="text" onChange={mudaTexto} />
                        <p className='texto_digitado'>pesquisa: {texto}</p>
                    </div>
                    <div className="projetos">
                        { projetos.filter((projeto)=>projeto.titulo.toLocaleLowerCase().includes(texto)).map((projeto) => <Projeto key = { projeto.id } titulo={projeto.titulo} sinopse={projeto.sinopse} imagem={projeto.imagem}/>) }
                    </div>
                </div>
            </div>
            <div className="resto">
                <h1>Obrigada!</h1>
            </div>
        </main>
    )
}
export default Main