import React, { useState } from 'react';
import Link from '../Link/Link';
import { XIcon, MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: "Home",
            link: "/home"
        },
        {
            id: 2,
            name: "Shop",
            link: "/shop"
        },
        {
            id: 3,
            name: "Pricing",
            link: "/pricing"
        },
        {
            id: 5,
            name: "Contacts",
            link: "/contacts"
        }
    ];
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-10 cursor-pointer h-10 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center text-center bg-indigo-200 absolute md:static  w-full duration-500 ease-in ${open ? 'top-10' : 'top-[-120px] duration-0'}`}>
                {
                    routes.map(route => <Link key={route.id} name={route.name} link={route.link}></Link>)

                }
            </ul>

        </nav>

    );
};

export default Navbar;