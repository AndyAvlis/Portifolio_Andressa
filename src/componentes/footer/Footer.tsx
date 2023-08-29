import "./Footer.css"


function Footer() {
    return(
        <footer>
            <div className="Andressa">
                <h1>Andressa</h1> <h1>Miranda</h1>
                <p>Obrigada!</p>
            </div>
            <nav>
                <ul>
                <h1>Atendimento</h1>
                    <li>
                        <a href="#">Central de Atendimento</a>
                    </li>
                    <li>
                        <a href="#">Dúvidas Frequentes</a>
                    </li>
                    <li>
                        <a href="#">Política de Segurança e Privacidade</a>
                    </li>
                </ul>

                <ul>
                    <h1>Sobre Mim</h1>
                    <li>
                        <a href="#">Minha História</a>
                    </li>
                    <li>
                        <a href="#">Trabalhe Comigo</a>
                    </li>
                </ul>

                <ul>
                    <h1>Desing</h1>
                    <li>
                        <a href="#">Formas de Pagamento</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer