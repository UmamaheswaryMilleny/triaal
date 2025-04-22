import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-softPink shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-valentine text-romantic">ValenTime 💌</h1>
        <ul className="flex space-x-6">
          <li><Link to="hero" smooth duration={500} className="hover:text-romantic cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth duration={500} className="hover:text-romantic cursor-pointer">About</Link></li>
          <li><Link to="gifts" smooth duration={500} className="hover:text-romantic cursor-pointer">Gifts</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
