import Navigation from './Navbar';


function Header() {
    return (
        <header className="header">
            <h1>Crystal Clarity</h1>
            <div>
            <Navigation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navigation>
          </div>
        </header>
    );
}

export default Header;