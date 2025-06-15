import React from 'react';
import MenuBurger from './MenuBurger';
import logo from '../Assets/imgs/LogoBF.webp';

const Header = ({ showHeader, handleNavigation }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 p-4 h-20 backdrop-blur-md transition-all duration-500 ease-in-out ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ 
        backgroundColor: 'var(--header-backdrop)',
        color: 'var(--text-primary)'
      }}
    >
      <nav className="flex justify-between items-center w-full h-full">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 rounded-full cursor-pointer"
          onClick={() => handleNavigation('home')}
        />
        <MenuBurger handleNavigation={handleNavigation} />
      </nav>
    </header>
  );
};

export default Header;
