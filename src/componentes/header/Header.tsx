import "./Header.css"
import Logo from "../../assets/Logo.png"

function Header(){
    return(
        <header>
            <div className="fundo">
                <div className="Andressa">
                    <h1>Andressa Miranda</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre Mim</a>
                    </li>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <li>
                        <a href="#">Desings</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header