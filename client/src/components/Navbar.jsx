import '../styles/App.css'
import styles from './Navbar.module.css'
import logo from './../assets/plogo.png'

function Navbar() {

    return (
        <>
            <div className={Nav}>

                <img src={logo} className={NavLogo}></img>

            </div>
        </>
    )

}

export default Navbar