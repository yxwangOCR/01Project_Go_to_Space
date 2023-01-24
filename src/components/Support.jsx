import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import SupportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <section className='w-full'>
      <div className='w-full bg-gray-900/90 absolute'>
        <img
          className='w-full min-h-[435px] lg:max-h-[500px] mix-blend-overlay object-cover'
          src={SupportImg}
          alt='support'
        />
      </div>

      <section>
        <div className='relative text-white max-w-[1240px] mx-auto'>
          <div className='px-4 py-8'>
            <h2 className='uppercase text-slate-300 text-center text-xl font-medium'>
              Support
            </h2>
            <h3 className='text-3xl font-bold text-center pt-4'>
              Finding the right team
            </h3>
            <p className='pt-4 text-xl text-center text-slate-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              eaque cupiditate facere voluptate esse. Fugiat quaerat blanditiis
              incidunt officiis maxime totam voluptatem delectus corporis, esse
              enim sapiente hic suscipit quod?
            </p>
          </div>

          <div className='grid lg:grid-cols-3 w-full'>
            <div className='grid grid-cols-1 text-black relative mx-4 my-8 rounded-2xl bg-slate-100'>
              <div>
                <div>
                  <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3em] ml-[2em]' />
                </div>
                <h3 className='px-8 my-2 text-slate-900 font-bold text-2xl'>
                  Sales
                </h3>
                <p className='px-8 py-2 text-md text-slate-600'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam dolorum dolores ea suscipit, architecto, quia officiis
                  neque facilis nobis error facere odit, ipsum reiciendis dolor
                  repellat repudiandae perferendis eos vel!
                </p>
                <div className='bg-slate-200 px-8 py-4 rounded-b-2xl hover:bg-slate-400'>
                  <p className='flex items-center text-indigo-600 hover:cursor-pointer hover:text-white'>
                    Contact Us <ArrowSmRightIcon className='w-6 ml-2' />
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 text-black relative mx-4 my-8 rounded-2xl bg-slate-100'>
              <div>
                <div>
                  <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3em] ml-[2em]' />
                </div>
                <h3 className='px-8 my-2 text-slate-900 font-bold text-2xl'>
                  Technical Support
                </h3>
                <p className='px-8 py-2 text-md text-slate-600'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam dolorum dolores ea suscipit, architecto, quia officiis
                  neque facilis nobis error facere odit, ipsum reiciendis dolor
                  repellat repudiandae perferendis eos vel!
                </p>
                <div className='bg-slate-200 px-8 py-4 rounded-b-2xl hover:bg-slate-400'>
                  <p className='flex items-center text-indigo-600 hover:cursor-pointer hover:text-white'>
                    Contact Us <ArrowSmRightIcon className='w-6 ml-2' />
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 text-black relative mx-4 my-8 rounded-2xl bg-slate-100'>
              <div>
                <div>
                  <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3em] ml-[2em]' />
                </div>
                <h3 className='px-8 my-2 text-slate-900 font-bold text-2xl'>
                  Media Inquiries
                </h3>
                <p className='px-8 py-2 text-md text-slate-600'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam dolorum dolores ea suscipit, architecto, quia officiis
                  neque facilis nobis error facere odit, ipsum reiciendis dolor
                  repellat repudiandae perferendis eos vel!
                </p>
                <div className='bg-slate-200 px-8 py-4 rounded-b-2xl hover:bg-slate-400'>
                  <p className='flex items-center text-indigo-600 hover:cursor-pointer hover:text-white'>
                    Contact Us <ArrowSmRightIcon className='w-6 ml-2' />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Support;
