import '../styles/navbar.css';

function Navbar () {
  return (
    <nav>
      <div className='nav-logo'>
        <a href="#">
            <img src="" alt="" />
            <span>AccEase</span>
        </a>
      </div>
      <div className='nav-links'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Add - Ons</a></li>
            <li><a href="#">User Guide</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar