import projeto_escada from '../../assets/img/projeto_escada.webp';
import header from '../../assets/style/header.scss'

const Header = () => {

    return (
        <header>
        <div className="container__cabecalho">
            <img className="cabecalho__img" src={projeto_escada} alt="projeto escada"/>
            <nav className="cabecalho__nav">
                <ul className="cabecalho__links">
                    <li> <a href="#inicio">Inicio</a></li>
                    <li><a href="projetos">Projetos</a></li>
                    <li><a href="contatos">Contatos</a></li>
                </ul>
            </nav>

            <div className="container__titulo">
                <h1>ART PEDRAS</h1>
                <p className="animação">Aqui, nós tornamos seus sonhos
                    realidade.</p>
            </div>

        </div>
    </header>
    )
}

export default Header