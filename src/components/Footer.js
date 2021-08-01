import React from 'react';

function Footer() {
    return (
            <footer className="footer">
                <p className="footer__content">&copy; {new Date().getFullYear()} Mesto Russia</p>
            </footer>
    );
}

export default Footer;