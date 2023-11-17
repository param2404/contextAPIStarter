import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo.png';

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
        <Link className="navbar-brand" to='/'>
          <img src={Logo} alt="logo" width="50px" height="50px"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/properties'>
                <a className="nav-link" href="#">Properties</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/resale'>
                <a className="nav-link" href="#">Resale</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about'>
                <a className="nav-link" href="#">About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;