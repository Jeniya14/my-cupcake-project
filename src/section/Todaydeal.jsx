import React from 'react'

const Todaydeal = () => {
  return (
    <div className=' flex flex-col sm:flex-row flex-1/2 max-w-full p-2 ' >
        <div className="w-full md:w-1/2 sm:ps-4">
            <img src="./assets/counter.png" alt="cupcake" />
        </div>
        <div className="w-full md:w-1/2 text-center max-w-md p-4">

          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
            OUR FLAVORS
          </h2>

          <p className="text-xl italic font-semibold mb-6">
            Fresh n’ Tasty!
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>

          <button className="border-2 border-black px-8 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition">
            Menu
          </button>

      </div>
    </div>
  )
}

export default Todaydeal