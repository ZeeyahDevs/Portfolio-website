import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='zee'>ZeeyahDevs</h1>
      <ul className='nav-menu'> 
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/project'><li>Project</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
