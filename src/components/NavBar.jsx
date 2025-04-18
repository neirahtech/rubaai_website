import React, { useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router';
import { assets } from '../assets/assets';

const NavBar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='flex items-center justify-between text-sm md:text-md py-2 mx-2 mt-5 md:mt-8 md:mx-10 lg:mx-20 rounded-lg bg-gray-700 gap-4'>
            <div className='flex flex-row gap-3 items-center ml-3 md:ml-5'>
                <img onClick={() => navigate('/')} className='h-8 md:h-10 cursor-pointer' src={assets.logo} alt="" />
                <p onClick={() => navigate('/')} className='text-3xl md:text-lg font-playfair font-bold cursor-pointer'>R U B A A I</p>
            </div>
            <ul className='hidden md:flex items-start gap-2 lg:gap-6 text-xs text-center cursor-pointer'>
                <NavLink to={'/'} className={({ isActive }) =>
                    isActive
                        ? "text-black bg-white rounded-lg px-2 font-semibold py-1 hover:scale-105"
                        : "py-1 hover:scale-105"
                }
                >
                    <li>HOME</li>
                </NavLink>
                <NavLink to={'/about'} className={({ isActive }) =>
                    isActive
                        ? "text-black bg-white rounded-lg px-2 font-semibold py-1 hover:scale-105"
                        : "py-1 hover:scale-105"
                }
                >
                    <li>ABOUT US</li>
                </NavLink>
                <NavLink to={'/services'} className={({ isActive }) =>
                    isActive
                        ? "text-black bg-white rounded-lg px-2 font-semibold py-1 hover:scale-105"
                        : "py-1 hover:scale-105"
                }
                >
                    <li>SERVICES</li>
                </NavLink>
                <NavLink to={'/partner'} className={({ isActive }) =>
                    isActive
                        ? "text-black bg-white rounded-lg px-2 font-semibold py-1 hover:scale-105"
                        : "py-1 hover:scale-105"
                }
                >
                    <li>PARTNER WITH US</li>
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) =>
                    isActive
                        ? "text-black bg-white rounded-lg px-2 font-semibold py-1 hover:scale-105"
                        : "py-1 hover:scale-105"
                }
                >
                    <li>CONTACT</li>
                </NavLink>
            </ul>
            <div className=''>
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden rounded mr-3' src={assets.menu_icon} alt="" />
                {/* ------ Mobile Menu ------- */}
                <div className={`${showMenu ? 'fixed w-full' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-black transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <Link to="/" onClick={() => setShowMenu(false)}>
                            <img className="w-10" src={assets.logo} alt="Rubaai Logo" />
                        </Link>
                        <Link to="/" onClick={() => setShowMenu(false)}>
                            <p className="text-2xl font-playfair font-bold cursor-pointer">R U B A A I</p>
                        </Link>
                        <img className='w-6' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-4 py-2 rounded inline-block bg-white text-black'
                                    : 'px-4 py-2 rounded inline-block text-white'
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to={'/about'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-4 py-2 rounded inline-block bg-white text-black'
                                    : 'px-4 py-2 rounded inline-block text-white'
                            }
                        >
                            ABOUT US
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to={'/services'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-4 py-2 rounded inline-block bg-white text-black'
                                    : 'px-4 py-2 rounded inline-block text-white'
                            }
                        >
                            SERVICES
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to={'/partner'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-4 py-2 rounded inline-block bg-white text-black'
                                    : 'px-4 py-2 rounded inline-block text-white'
                            }
                        >
                            PARTNER WITH US
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to={'/contact'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-4 py-2 rounded inline-block bg-white text-black'
                                    : 'px-4 py-2 rounded inline-block text-white'
                            }
                        >
                            CONTACT
                        </NavLink>
                    </ul>
                </div>
            </div>

            <div className='hidden md:flex mr-3 md:mr-5'>
                <button className='bg-black py-2 px-4 rounded-3xl font-bold hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'>Download Now</button>
            </div>
        </div>
    )
}

export default NavBar
