import "./Header.css"
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre Mim</Link>
                    </li>
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <li>
                        <Link to="/desing">Desings</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header