import React from "react";

const About = () => {
  return (
    <section name='about' className='w-full bg-zinc-100 py-16'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center px-6'>
          <h2 className='text-5xl font-bold'>
            Trusted by developers across the world
          </h2>
          <p className='text-2xl text-slate-600 py-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla
            repellendus sint delectus officiis, velit beatae! Modi fuga
            praesentium pariatur laudantium, natus, aspernatur culpa dolor esse
            placeat repellendus reiciendis a?
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-6'>
          <div className='border py-6 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-slate-600 font-medium'>Completion</p>
          </div>
          <div className='border py-6 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-slate-600 font-medium'>Delivery</p>
          </div>
          <div className='border py-6 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100K</p>
            <p className='text-slate-600 font-medium'>Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
