import React from 'react'
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';


const heroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20 gap-10'>
      <h1 className='text-4xl lg:text-7xl sm:text-6xl font-customFontEr tracking-tight] text-neutral-700 dark: text-neutral-300 font-semibold text-center'>AceDot Build Tools <span className='bg-gradient-to-r from-indigo-200 to-indigo-700 text-transparent bg-clip-text'>for Developers</span></h1>
      <p className='text-center text-neutral-400 max-x-4xl font-customFontKr text-base lg:text-lg  mb:text-sm'>
      같은 듣기만 가슴이 같이, 얼음에 내는 착목한는 되는 있는가? 실로 할지라도 피고 눈이 않는 싹이 붙잡아 미묘한 그들에게 있으랴? 무한한 평화스러운 바이며, 않는 인류의 때까지 관현악이며, 예가 보라. 위하여 눈에 되려니와, 방황하여도, 물방아 봄바람이다. 곧 이것을 돋고, 못하다 노래하며 발휘하기 보라.
      </p>
      <div className='flex gap-4'>
        {heroLinks.map((item, idx)=>(
          <Link to={item.to} key={idx} 

          className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
            idx === 1 &&
            'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'
          }`}
         >
          {item.text}
          </Link>
        ))}
      </div>
      <div className='flex mt-10 gap-4 justify-center flex-col md:flex-row items-center'>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className='vid md:w-1/3'>
          <source src={video2} />
        </video>
      </div>

    </div>
  )
}

export default heroSection;