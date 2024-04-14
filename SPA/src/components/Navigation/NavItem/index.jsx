import React from 'react';

const NavItem = ({ name, setPageToDisplay }) => {
    const handleClick = () => {
        setPageToDisplay( name );
    };

    return (
        <div className="nav-item" onClick={handleClick}>
            {name}
        </div>
    );
};

export default NavItem;
