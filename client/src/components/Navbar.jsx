import { Link, useLocation } from 'react-router-dom';

import Auth from '../utils/auth'

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      
      <li>
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About our application
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <>
    <li>
        <Link
          to="/Profile"
          className={currentPage === '/Profile' ? 'nav-link active' : 'nav-link'}
        >
          My Profile
        </Link>
      </li>
      <li>
        <Link
          to="/Globe"
          className={currentPage === '/Globe' ? 'nav-link active' : 'nav-link'}
        >
          Crystal Ball
        </Link>
      </li>
          <li><Link onClick={Auth.logout}>Logout</Link></li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/Login"
              className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
            >
              Login  
            </Link>
          </li>
          <li>
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

export default Navigation;