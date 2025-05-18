import React from 'react';
import Navbar from './navbar/NavBar';
import Footer from './footer/Footer';



const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100 w-100">
            <Navbar />
            <main className="flex-fill w-100">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
