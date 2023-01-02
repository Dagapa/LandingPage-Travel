import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBeer, FaBars } from 'react-icons/fa';
import { GoFlame } from 'react-icons/go';
import { GiTrophyCup } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiUserCircle, HiOutlineLogout } from 'react-icons/hi';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <FaBeer />,
    },
    {
      path: '/topgames',
      name: 'Top Games',
      icon: <GiTrophyCup />,
    },
    {
      path: '/favorites',
      name: 'Favorites',
      icon: <GoFlame />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <AiOutlineQuestionCircle />,
    },
    {
      path: '/user',
      name: 'User',
      icon: <HiUserCircle />,
    },
    {
      path: '/logout',
      name: 'Logout',
      icon: <HiOutlineLogout />,
    },
  ];
  return (
    <div className='container'>
      <div style={{ width: isOpen ? '50px' : '300px' }} className='sidebar'>
        <div className='top_section'>
          <h1 style={{ display: isOpen ? 'none' : 'block' }} className='logo'>
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeClassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? 'none' : 'block' }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
