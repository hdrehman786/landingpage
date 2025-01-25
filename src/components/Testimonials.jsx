import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

import React from 'react'
import { testimonials } from '../containts'

const Testimonials = () => {
  return (
    <div className=' mt-20 mb-6 p-2'>
      <div className=' flex justify-center mt-8 items-center w-full'>
        <h2 className='text-3xl lg:text-6xl sm:text-4xl text-center tracking-wide'>What People are Saying</h2>
      </div>
      <div className='flex justify-center flex-wrap mt-12'>
            {
                testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 py-2 px-3 '>
                    <div className=' bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin text-neutral-500'>
                    <p>{testimonial.text}</p>
                    <div className='flex mt-8 items-start'>
                    <img className=' h-12 w-12 rounded-full border border-neutral-300 mr-6' src={testimonial.image} alt={testimonial.user} />
                    <div>
                    <h6>{testimonial.user}</h6>
                    <span className=' text-neutral-600'>{testimonial.company}</span>
                    </div>
                    </div>
                    </div>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default Testimonials
