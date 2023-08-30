import "./Main.css"
import Rain from "../../assets/Rain.png"
import Room from "../../assets/room.png"

function Main() {
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
                </div>
                <div className="desing">
                    <div className="imgCortada">
                        <img src={Rain}/>
                    </div>
                    <div className="imgCortada">
                        <img src={Room}/>
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