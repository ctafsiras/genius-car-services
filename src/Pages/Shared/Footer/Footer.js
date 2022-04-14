import React from 'react';

const Footer = () => {
    const today= new Date()
    const year=today.getFullYear();
    return (
        <footer>
            <p>copyright protected by Genius Car Services &copy; {year} </p>
        </footer>
    );
};

export default Footer;