import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className='bg-slate-900 w-full min-h-[300px] text-slate-100 py-8 px-16'>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-16 border-b-2 border-gray-600 py-8'>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg'>solutions</h4>
          <ul>
            <li className='py-1 px-0 text-sm'>Marketing</li>
            <li className='py-1 px-0 text-sm'>Analytics</li>
            <li className='py-1 px-0 text-sm'>Data</li>
            <li className='py-1 px-0 text-sm'>Cloud</li>
            <li className='py-1 px-0 text-sm'>Commerce</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg'>support</h4>
          <ul>
            <li className='py-1 px-0 text-sm'>Pricing</li>
            <li className='py-1 px-0 text-sm'>Inquery</li>
            <li className='py-1 px-0 text-sm'>Guide</li>
            <li className='py-1 px-0 text-sm'>API</li>
            <li className='py-1 px-0 text-sm'>Service</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg'>company</h4>
          <ul>
            <li className='py-1 px-0 text-sm'>About</li>
            <li className='py-1 px-0 text-sm'>Blogs</li>
            <li className='py-1 px-0 text-sm'>Career</li>
            <li className='py-1 px-0 text-sm'>Press</li>
            <li className='py-1 px-0 text-sm'>Partners</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase py-2 text-lg'>legal</h4>
          <ul>
            <li className='py-1 px-0 text-sm'>claims</li>
            <li className='py-1 px-0 text-sm'>Privacy</li>
            <li className='py-1 px-0 text-sm'>Policies</li>
            <li className='py-1 px-0 text-sm'>Terms</li>
            <li className='py-1 px-0 text-sm'>Conditions</li>
          </ul>
              </div>
              <div className="col-span-2 uppercase">
                  <p>Subscribe to our newsletter</p>
                  <p>The latest news, articles, and resources, sent to your inb</p>
              </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
<i className='ri-twitter-fill'></i>
      <i className='ri-github-fill'></i>
      <i className='ri-twitch-fill'></i>
*/
