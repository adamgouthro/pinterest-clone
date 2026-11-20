import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'

function Layout() {

return (
    <>
    <Narbar />
    <main>
        <Outlet />
    </main>
    </>
)

}

export default Layout;