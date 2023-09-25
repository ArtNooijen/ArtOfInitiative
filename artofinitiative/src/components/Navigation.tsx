import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/images/logo.jpeg';
const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/dmscreen" className="hover:text-gray-400">DMscreen</Link>
        </li>
        <li>
          <Link to="/beastiary" className="hover:text-gray-400">Beastiary</Link>
        </li>
      </ul>
      <div>
        <img src={Image} alt="logo" className="w-10 rounded-lg m-auto aut" />
      </div>
    </nav>
  );
}

export default Navigation;
