import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className='w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SPACE .</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='mr-2'>Sign In</button>
          <button className='mr-2'>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {nav ? (
            <XIcon className='h-8 w-8' />
          ) : (
            <MenuIcon className='h-8 w-8' />
          )}
        </div>
      </div>
      <ul
        className={
          nav ? "absolute bg-zinc-200 w-full px-8 md:hidden" : "hidden"
        }>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col my-4'>
          <button className='m-2'>Sign In</button>
          <button className='m-2'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
