import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navbar.scss'


const Navbar = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-links' to='/home'>
            HOME
          </Link>
          <Link className='nav-links' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-links' to='/login'>
            LOGIN
          </Link>
        </div>
      </div >
      <Outlet />
    </Fragment >
  );
};

export default Navbar