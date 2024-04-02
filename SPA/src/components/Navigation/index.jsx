import React from 'react';
import NavItem from './NavItem';

const Navigation = ({ setPageToDisplay }) => {
    const navigationItems = [
        { name: "Home", isHome: true },
        { name: "Why?", content: "Here is why..." },
        { name: "When?", content: "Here is when..." },
        { name: "Who?", content: "Here is who..." }
    ];

    const handleHomeClick = ({updateFunction}) => {
        const homeItem = () => {
            updateFunction(null)
        }
        // Här kan du hantera navigeringen för din "Home"-knapp
        // Till exempel, du kan sätta pageToDisplay eller göra någon annan hantering
        console.log("Navigera till startsidan");
    };

    return (
        <div className="navigation">
            {navigationItems.map(item => (
                item.isHome ? (
                    <div key={item.name} className="nav-item" onClick={handleHomeClick}>{item.name}</div>
                ) : (
                    <NavItem 
                        key={item.name} 
                        name={item.name} 
                        content={item.content} 
                        setPageToDisplay={setPageToDisplay} 
                    />
                )
            ))}
        </div>
    );
};

export default Navigation;
