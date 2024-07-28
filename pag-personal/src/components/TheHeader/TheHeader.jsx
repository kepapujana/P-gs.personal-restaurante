import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.styles.scss'


const TheHeader = () => {
  return (
    <>
        <nav>
            <ul className='nav-menu'>
                <li className='nav-menu-item'>
                    <Link to="/" className='nav-menu-link'>
                    Home
                    </Link>
                </li>
                <li className='nav-menu-item'>
                    <Link to="/contact" className='nav-menu-link'>
                    Contact
                    </Link>
                </li>
                <li className='nav-menu-item'>
                    <Link to="/biography" className='nav-menu-link'>
                    Biografia
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default TheHeader