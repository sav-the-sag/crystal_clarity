import { Link, useLocation } from 'react-router-dom';

import Auth from '../utils/auth'

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li class="test">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      
      <li class="test">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About our application
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <>
    <li class="test">
        <Link
          to="/Profile"
          className={currentPage === '/Profile' ? 'nav-link active' : 'nav-link'}
        >
          My Profile
        </Link>
      </li>
      <li class="test">
        <Link
          to="/Globe"
          className={currentPage === '/Globe' ? 'nav-link active' : 'nav-link'}
        >
          Crystal Ball
        </Link>
      </li>
          <li class="test"><Link onClick={Auth.logout}>Logout</Link></li>
        </>
      ) : (
        <>
          <li class="test">
            <Link
              to="/Login"
              className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
            >
              Login  
            </Link>
          </li>
          <li class="test">
            <Link
              to="/Signup"
              className={currentPage === '/Signup' ? 'nav-link active' : 'nav-link'}
            >
              Signup
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Nav;