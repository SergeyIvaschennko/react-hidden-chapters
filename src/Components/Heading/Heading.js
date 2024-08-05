import React from 'react';
import './Heading.css';

const Heading = ({ mainHeading, subHeading }) => {
    return (
        <div className="page-header">
            <div className="text-content">
                <h1 className="main-heading">{mainHeading}</h1>
                <p className="sub-heading">{subHeading}</p>
            </div>
            <a href="#" className="more-link">View more</a>
        </div>
    );
};

export default Heading;
