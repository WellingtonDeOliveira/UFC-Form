import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {

  return (
    <div>
      <div className='divViewNav'>
        <div className='divRowNav'>
          <h1 className='titleNav'>UFC </h1>
          <p className='subtitleNav'>CRUD</p>
        </div>
        <Link className='link-form' to="/form">
          <button className='buttonNav'>
            <span className='add-user'>+</span>
          </button>
        </Link>
      </div>
    </div>
  );
}