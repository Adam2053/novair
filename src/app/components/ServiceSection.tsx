import React from 'react'
import laptop from '../../assets/laptop.webp'
import { Button } from './Button'

const ServiceSection = () => {
  return (
    <>
        <div className='flex gap-[20rem] mt-10'>
            <img className='h-[40rem]' src={laptop.src} alt="" />
            <div className='w-[30vw] flex flex-col justify-center'>
                <h1 style={{lineHeight:"4rem"}} className='text-5xl w-[10vw] mb-5'>
                    WE PROVIDE HVAC CONSULTANCE
                </h1>
                <p className='text-lg mb-5'>
                We assist in building up better communication between people and brands. With help of our websites we make a digital world a better place, where customers and companies achieve their goals
                </p>
                <Button />
            </div>
        </div>
    </>
  )
}

export default ServiceSection