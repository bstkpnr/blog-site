import '../header/header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Beste Tokpınar</h1>
      <ul className="navList">
        <li className="navItem">
        <Link to="/" style={{textDecoration:'none',color:'#9f2cbf'}}>Home</Link>
        </li>
        <li className="navItem">
        <Link to="/blog" style={{textDecoration:'none',color:'#9f2cbf'}}>Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
