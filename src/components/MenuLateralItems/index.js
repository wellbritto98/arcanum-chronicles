import React, { useState } from 'react';
import './MenuLateralItems.css';

const MenuLateralItems = ({ title, children, id }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };



    return (
        <div className="MenuLateralItems" id={id}>
            <div className={`MenuLateralItems-header ${isExpanded ? 'clicked' : 'unclicked'} `} onClick={toggleExpansion}>
                <svg className={`MenuLateralItems-icon ${isExpanded ? 'rotated' : ''}`} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M14.9951 4.25L15.9375 5.08725L8.5 12.75L1.0625 5.08725L2.00494 4.25L8.5 10.9416L14.9951 4.25Z" fill="#C7915E" />
                </svg> {title}
            </div>
            <ul className={`MenuLateralItems-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {children}
            </ul>
        </div>
    );
}

export default MenuLateralItems;
