import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeClass, setActiveClass] = useState(false);

  const handleActive = () => setActiveClass(!activeClass);

  return (
    <section className='navigation'>
      <div className='nav-container'>
        <div className='title'>
          <label>Reactibook</label>
        </div>
        <nav className={activeClass ? 'active' : 'none'}>
          <div className='nav-mobile'>
            <div id='nav-toggle' className={activeClass ? 'active' : 'none'} onClick={handleActive}>
              <span></span>
            </div>
          </div>
          <ul className='nav-list'>
            <li>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/login' activeClassName='active'>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
