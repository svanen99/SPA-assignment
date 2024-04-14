import React from 'react';
import NavItem from './NavItem';

const Navigation = ({ setPageToDisplay }) => {
    const navigationItems = [
        "Home",
        "Why?",
        "When?",
        "Who?"
    ];

    return (
        <div className="navigation">
            {navigationItems.map((item, index ) => (
                item === "Home" ? (
                    <div key={index} className="nav-item" onClick={() => { setPageToDisplay(null); console.log("Nu är du på startsidan"); }}>{item}</div>
                ) : (
                    <NavItem 
                        key={index} 
                        name={item} 
                        setPageToDisplay={setPageToDisplay} 
                    />
                )
            ))}
        </div>
    );
};

export default Navigation;
