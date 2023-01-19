// import {FontAwesomeIcon} from '@font'



const NavBar = ({background})=> {
    return(
        <>
            <header className={`header background--${background}`}>
            <div className="header-container"></div>

            <div className="menu-button">
            {/* <FontAwesomeIcon icon={faBars} sizw="lg" color="white"/> */}

            <small>Menu</small>
            </div>

            <nav>
                <ul className='nav-container'>
                    <li>
                        INICIO
                        <a href="/"></a>
                    </li>
                    <li>
                        SUCURSALES
                        <a href="/"></a>
                    </li>
                    <li>
                        PRODUCTOS
                        <a href="/"></a>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    )
}

export default NavBar