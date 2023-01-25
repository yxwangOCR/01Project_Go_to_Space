import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <header className='w-screen h-[80px] bg-zinc-200 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SPACE .</h1>
          <ul className='hidden md:flex'>
            <li>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} offset={20} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to='support' smooth={true} offset={30} duration={500}>
                Support
              </Link>
            </li>

            <li>
              <Link to='platform' smooth={true} offset={40} duration={500}>
                Platform
              </Link>
            </li>
            <li>
              <Link to='pricing' smooth={true} offset={50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='bg-transparent text-indigo-600 mr-2'>
            Sign In
          </button>
          <button>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {nav ? <XIcon className='w-8' /> : <MenuIcon className='w-8' />}
        </div>
      </div>
      <ul
        className={
          nav ? "absolute bg-zinc-200 w-full px-8 md:hidden" : "hidden"
        }>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link
            onClick={handleClose}
            to='about'
            smooth={true}
            offset={20}
            duration={500}>
            About
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link
            onClick={handleClose}
            to='support'
            smooth={true}
            offset={20}
            duration={500}>
            Support
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link
            onClick={handleClose}
            to='platform'
            smooth={true}
            offset={40}
            duration={500}>
            Platform
          </Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link
            onClick={handleClose}
            to='pricing'
            smooth={true}
            offset={20}
            duration={500}>
            Pricing
          </Link>
        </li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 mb-4'>
            Sign In
          </button>
          <button>Sign Up</button>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
