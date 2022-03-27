import React from 'react';

const Link = ({name,link}) => {
    return (
        <li className='mr-10'><a href={link}>{name}</a></li>
    );
};

export default Link;