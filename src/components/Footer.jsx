import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className='bg-slate-900 w-full min-h-[300px] text-slate-100 py-8 px-16'>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-16 border-b-2 border-gray-600 py-8'>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg text-indigo-400 border-b-2 border-indigo-400'>
            solutions
          </h4>
          <ul>
            <li className='py-1 px-0 text-sm'>Marketing</li>
            <li className='py-1 px-0 text-sm'>Analytics</li>
            <li className='py-1 px-0 text-sm'>Data</li>
            <li className='py-1 px-0 text-sm'>Cloud</li>
            <li className='py-1 px-0 text-sm'>Commerce</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg text-indigo-400 border-b-2 border-indigo-400'>
            support
          </h4>
          <ul>
            <li className='py-1 px-0 text-sm'>Pricing</li>
            <li className='py-1 px-0 text-sm'>Inquery</li>
            <li className='py-1 px-0 text-sm'>Guide</li>
            <li className='py-1 px-0 text-sm'>API</li>
            <li className='py-1 px-0 text-sm'>Service</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg text-indigo-400 border-b-2 border-indigo-400'>
            company
          </h4>
          <ul>
            <li className='py-1 px-0 text-sm'>About</li>
            <li className='py-1 px-0 text-sm'>Blogs</li>
            <li className='py-1 px-0 text-sm'>Career</li>
            <li className='py-1 px-0 text-sm'>Press</li>
            <li className='py-1 px-0 text-sm'>Partners</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg text-indigo-400 border-b-2 border-indigo-400'>
            legal
          </h4>
          <ul>
            <li className='py-1 px-0 text-sm'>claims</li>
            <li className='py-1 px-0 text-sm'>Privacy</li>
            <li className='py-1 px-0 text-sm'>Policies</li>
            <li className='py-1 px-0 text-sm'>Terms</li>
            <li className='py-1 px-0 text-sm'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 bg-slate-800 p-4 rounded-lg flex flex-col justify-between gap-4'>
          <p className='uppercase font-bold'>Subscribe to our newsletter</p>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className='flex flex-col xl:flex-row gap-4'>
            <input
              type='email'
              className='rounded-md p-2 w-full text-slate-900'
            />
            <button className='max-w-[10em]'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 my-2 justify-between text-center'>
        <p className='text-slate-500'>
          2023 Workflow, LLC. All rights reserved
        </p>
        <div className='flex justify-around text-2xl'>
          <i className='ri-twitter-fill mr-2'></i>
          <i className='ri-github-fill mr-2'></i>
          <i className='ri-twitch-fill mr-2'></i>
          <i className='ri-facebook-circle-fill mr-2'></i>
          <i className='ri-youtube-fill mr-2'></i>
          <i className='ri-instagram-fill mr-2'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
