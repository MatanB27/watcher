import { useState } from 'react'
import styles from './header.module.scss'
import SideBar from '../sidebar/sidebar'
import { ROOT_ROUTE } from '../../constants/routes'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'

export default function Header({}) {
    
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const openSideBar = () => setSideBarOpen(true)
    const closeSideBar = () => setSideBarOpen(false)


    return (
        <>
            <HeaderMain/>
            <SideBar isOpen={sideBarOpen} closeSideBar={closeSideBar}/>
        </>
    )
}

function RenderHeaderLogo() {
    return (
        <Link className={styles['logo-container']} href={ROOT_ROUTE}>
            {/* <img src={menuIcon} alt={'menu'}/> */}
            ADD LOGO IMAGE HERE
        </Link>
    )
}

function HeaderMain({}) {
    return (
        <header className={styles['header']}>
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </header>
    )
}

function HeaderLeft() {
    return (
        <div className={styles['left']}>
            <button className={styles['menu-image-container']}>
                <img src={menuIcon} alt={'menu'}/>
            </button>
        </div>
    )
}

function HeaderCenter() {
    return (
        <div className={styles['center']}>
            Center
        </div>
    )
}

function HeaderRight() {
    return (
        <div className={styles['right']}>
            Right
        </div>
    )
}
