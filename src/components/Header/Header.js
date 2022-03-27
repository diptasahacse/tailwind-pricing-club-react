import React from 'react';
import Link from '../Link/Link';

const Header = () => {
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
        <nav className='md:flex items-center justify-between'>
            <h1 className="text-2xl font-bold">Pricing Table</h1>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link key={route.id} name={route.name} link={route.link}></Link>)

                }
            </ul>

        </nav>
    );
};

export default Header;