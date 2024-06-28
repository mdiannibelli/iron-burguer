import { IoCloseOutline } from 'react-icons/io5'
import clsx from 'clsx'
import { navbarStore } from '../../store/navbar-store'

const paths = [
    {
        url: '#',
        text: 'Inicio'
    },
    {
        url: '#tendencias',
        text: 'Tendencias'
    },
    {
        url: '#menu',
        text: 'Menu'
    },
    {
        url: '#sucursales',
        text: 'Sucursales'
    },
    {
        url: '#galeria',
        text: 'Galería'
    },
    {
        url: '#nosotros',
        text: 'Nosotros'
    },
    {
        url: '#contacto',
        text: 'Contacto'
    }
]

export default function SideMenu() {
    const navbarMenu = navbarStore(state => state.navbarMenu)
    const closeSideMenu = navbarStore(state => state.closeNavbarMenu)
    return (
        <div>
            {/* Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 right-0 h-screen w-screen opacity-30 bg-black' />
            }

            {/* Blur Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 right-0 h-screen w-screen backdrop-filter backdrop-blur-sm fade-in' />
            }

            {/* Nav */}
            <nav className={
                clsx(
                    'fixed z-20 top-0 right-0 w-screen h-screen bg-primary opacity-85 shadow-2xl transform transition-all duration-500',
                    { 'translate-x-full': !navbarMenu }
                )
            }>
                <IoCloseOutline onClick={closeSideMenu} className='text-black absolute top-0 lfet-0 m-2' size={50} />
                <div className='flex flex-col items-center mt-8 [&>a]:mt-12 [&>a]:text-black [&>a]:text-xl'>
                    {paths.map((path) => (
                        <a key={path.url} onClick={closeSideMenu} href={path.url}>{path.text}</a>
                    ))}
                </div>
            </nav>
        </div>
    )
}