import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div className='w-full h-full bg-zinc-200 flex flex-col py-8'>
      <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto my-8'>
        <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl font-bold md:text-7xl'>
            Cloud Management
          </h1>
          <p className='text-2xl mb-4'>This is our Tech brand</p>
          <button className="max-w-xs">Get Started</button>
        </div>
        <div>
          <img src={bgImg} alt='background' className='w-full' />
        </div>
      </div>
      <div className="flex flex-col gap-2 py-8 mx-8 justify-center items-center bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="font-bold text-2xl">Data Services</p>
          <div className="flex flex-col md:flex-row">
            <p className="flex px-4 py-2 text-slate-600"><CloudUploadIcon className="h-6 text-indigo-600 pr-2"/> App Security</p>
            <p className="flex px-4 py-2 text-slate-600"><DatabaseIcon  className="h-6 text-indigo-600 pr-2"/> Dashboard Design</p>
            <p className="flex px-4 py-2 text-slate-600"><PaperAirplaneIcon className="h-6 text-indigo-600 pr-2"/> Cloud Data</p>
            <p className="flex px-4 py-2 text-slate-600"><ServerIcon className="h-6 text-indigo-600 pr-2"/> API</p>
          </div>
        </div>
    </div>
  );
};

export default Hero;
