import React from 'react';
import Hero from '../components/Hero';
const Beastiary: React.FC = () => {
  return (
    <div className=' bg-slate-950 h-screen snap-y snap-mandatory overflow-scroll z-0'>
        
        <section className='snap-center'>
          <Hero />
        </section>
    </div>
  );
}

export default Beastiary;
