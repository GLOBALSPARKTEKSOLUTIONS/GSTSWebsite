import React, { useEffect, useState, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { BsGear } from 'react-icons/bs';
import { IoBookOutline } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
import Logo from '../../Assets/GSTS.png';
import LogoScrolled from '../../Assets/GSTS Blue.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(Logo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setLogo(scrolled ? LogoScrolled : Logo);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target) && window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'home', path: '/', icon: <MdHome size={24} />, label: 'Home' },
    { name: 'about', path: '/about', icon: <IoIosInformationCircleOutline size={24} />, label: 'About Us' },
    { name: 'services', path: '/servicepage', icon: <BsGear size={24} />, label: 'Services' },
    { name: 'technology', path: '/technologies', icon: <FaLaptopCode size={24} />, label: 'Technology' },
    { name: 'careers', path: '/careers', icon: <IoBookOutline size={24} />, label: 'Careers' },
  ];

  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Company Logo" className={styles.image} />
      </div>

      <nav ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {menuItems.map((item) => {
            const listItemClass = `${styles.listItem} ${isScrolled ? styles.listItemHidden : ''
              } ${hovered === item.name && !isScrolled ? styles.listItemHovered : ''}`;

            const iconClass = `${styles.icon} ${isScrolled ? styles.iconVisible : ''
              } ${hovered === item.name ? styles.iconHovered : ''}`;

            const tooltipClass = `${styles.tooltip} ${isScrolled && hovered === item.name ? styles.tooltipVisible : ''
              }`;

            return (
              <li
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  onClick={toggleMenu}
                >
                  <div className={listItemClass}>{item.label}</div>
                  <div className={styles.iconWrapper}>
                    <div className={iconClass}>{item.icon}</div>
                    <span className={tooltipClass} role="tooltip" aria-label={item.label}>
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className={styles.contactWrap}>
          <button
            className={`
              ${styles.contactBtn}
              ${isScrolled ? styles.contactBtnScrolled : ''}
              ${hovered === 'contact' && !isScrolled ? styles.contactBtnHovered : ''}
              ${hovered === 'contact' && isScrolled ? styles.contactBtnHoveredScrolled : ''}
            `}
            onMouseEnter={() => setHovered('contact')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              navigate('/contact');
              toggleMenu();
            }}
          >
            Contact Us
          </button>
        </div>
      </nav>

      <div
        className={styles.closeIcon}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <IoIosClose size={35} color="white" className={styles.close} /> : <IoMdMenu size={25} color={isScrolled ? '#1c3681' : '#fff'} />}
      </div>
    </header>
  );
};

export default Header;