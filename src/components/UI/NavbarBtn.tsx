import { IoMenuOutline } from 'react-icons/io5'
import { navbarStore } from '../../store/navbar-store'

const NavbarBtn = () => {
    const openNavbarMenu = navbarStore(state => state.openNavbarMenu)
    return (
        <div className="flex mr-4 lg:hidden md:fixed right-0 md:mx-12">
            <IoMenuOutline onClick={openNavbarMenu} className="text-primary" size={60} />
        </div>
    )
}

export default NavbarBtn
