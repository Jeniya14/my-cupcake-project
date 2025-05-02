import React from 'react'
const Hero = () => {
  return (
    <div>
        <div className='hero bg-center md:bg-top bg-[url(/assets/bg2.jpg)] bg-no-repeat bg-fixed bg-cover relative flex justify-center items-center h-[90vh] mt-[64px]'>
        <div  className=''>
          <div className='text-white text-3xl md:text-5xl font-bold mb-4'> A little bliss in evry bite</div>
          <button className='bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full self-center'>Try our cupcakes</button>
          
        </div>
        </div>
    </div>
  )
}

export default Hero