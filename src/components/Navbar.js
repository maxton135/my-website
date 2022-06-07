import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMenu = () => setClick(false);
  return (
    <React.Fragment>
    <nav className="navbar">
      <div className="navbar-container">
        MAX {click ? (<MenuIcon onClick={() => handleClick()}/>) : (<MenuOpenIcon onClick={() => handleClick()} />)}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                  Home 
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/aboutme' className='nav-links' onClick={closeMenu}>
                  About me  
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMenu}>
                  Projects 
              </Link>
          </li>
        </ul>
      </div>
    </nav>
    </React.Fragment>
  )
}

export default Navbar