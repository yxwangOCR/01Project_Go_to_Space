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
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl font-bold md:text-7xl'>
            Cloud Management
          </h1>
          <p className='text-2xl mb-4'>This is our Tech brand</p>
          <button>Get Started</button>
        </div>
        <div>
          <img src={bgImg} alt='background' className='w-full' />
        </div>
        <div>
          <p>Data Services</p>
          <div>
            <p>Icon. App Security</p>
            <p>Icon. Dashboard Design</p>
            <p>Icon. Cloud Data</p>
            <p>Icon. API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
