import '../../styles/index.css'
import styles from './Navbar.module.css'
import logo from './../../assets/plogo.png'

function Navbar() {

    return (
        <>
            <div className={`${styles.Nav}`}>

                <img src={logo} className={`${styles.NavLogo}`}></img>
                <a href="" className={styles.NavLink}>Home</a>
                {/* Just some placeholder content */}
                {/* Change based on logged in or not */}
                <a href="" className={styles.NavLink}>My Pins</a>
                <a href="" className={styles.NavLink}>Collections</a>

            </div>
        </>
    )

}

export default Navbar