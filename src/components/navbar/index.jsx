import './navbar.css'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

export function Navbar() {

  return (
    <div>
      <MediaQuery maxWidth={549}>
      <div className='divViewNav'>
        <Link className='link-form-min' to="/">
        <div className='divRowNav'>
          <h1 className='titleNav'>UFC </h1>
          <p className='subtitleNav'>CRUD</p>
        </div>
        </Link>
        <Link className='link-form' to="/form">
          <button className='buttonNav'>
            <span className='add-user'>+</span>
          </button>
        </Link>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={550}>
      <div className='divViewNav'>
        <Link className='link-form' to="/">
        <div className='divRowNav'>
          <h1 className='titleNav'>UFC </h1>
          <p className='subtitleNav'>CRUD</p>
        </div>
        </Link>
        <Link className='link-form' to="/form">
          <button className='buttonNav'>
            <span className='add-user'>+</span>
          </button>
        </Link>
      </div>
      </MediaQuery>
    </div>
  );
}