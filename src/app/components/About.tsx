import React from 'react'
import { Button } from './Button'

const About = () => {
    const stats = [
        {   
            id:1,
            number: "36M+",
            des: "Users of our Products"
        },
        {   
            id:2,
            number: "36M+",
            des: "Users of our Products"
        },
        {   
            id:3,
            number: "36M+",
            des: "Users of our Products"
        },
        {   
            id:4,
            number: "36M+",
            des: "Users of our Products"
        },
        {   
            id:5,
            number: "36M+",
            des: "Users of our Products"
        },
        {   
            id:6,
            number: "36M+",
            des: "Users of our Products"
        },
    ]
  return (
    <>
        <h1 className='text-3xl text-gray-400 mt-[8rem] mb-4'>About</h1>
        <p className='text-lg mb-[8rem] w-[80vw]'>In the global landscape of finance, entertainment and culture “Designer :s” acts as a 360-degree creative agency - navigating the space between talents and brands to build opportunities for business growth and development.</p>
        <div className='flex flex-wrap justify-evenly w-[70vw]'>
            {stats.map(s => (
                <div className='w-[20vw] mb-[8rem]' key={s.id}>
                    <h2 className='text-6xl'>{s.number}</h2>
                    <p className='text-lg text-gray-400'>{s.des}</p>
                </div>
            ))}
        </div>
        <Button />
    </>
  )
}

export default About