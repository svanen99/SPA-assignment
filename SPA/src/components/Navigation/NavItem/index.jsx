import React from 'react';
import Button from '../../Button';

const NavItem = ({ name, content, setPageToDisplay }) => {
    const handleClick = () => {
        setPageToDisplay({ title: name, content: content });
    };

    return (
        <div className="nav-item" onClick={handleClick}>
            {name}
        </div>
    );
};

export default NavItem;
