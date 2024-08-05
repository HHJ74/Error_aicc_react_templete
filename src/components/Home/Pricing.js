import React from 'react'
import { pricingOptions} from '../../constants/data'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Priceing = () => {
  return (<div className='mt-20'>
    <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-tight font-customFontEn font-semibold'>
    pricing
    </h2>
    <div className='flex flex-wrap'>
      {
        pricingOptions.map((option, idx)=>(
          <div key={idx} className='p-2 w-full sm:w-1/2 lg:w-1/3 '>
            <div className='p-10 border border-neutral-700 rounded-lg'>
              <p className='text-4xl font-customFontEn mb-8'>{option.title}
                {
                  option.title === 'pro'&&<span className='bg-gradient-to-r from-indigo-200 to-indigo-700 text-transparent bg-clip-text text-xl mb-4 ml-2 tracking-tighter font-semibold'>(Most popular)</span>
                }               
              </p>
              <p className='mb-8'>
                <span className='text-5xl mt-6 mr-2 font-customFontEn'>{option.price}</span>
                <span className='text-neutral-400 tracking-tight font-customFontEncustom'>/Month</span>
              </p>
              <ul>
                {option.features.map((feature, idx)=>(
                  <li key={idx} className='flex mt-8 items-center gap-2 font-customFontEn'>
                    <CheckCircle2/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
               <Link to={option.link} className='flex justify-center items-center w-full py-2 border border-indigo-700 rounded-lg mt-20 font-customFontEn hover:bg-indigo-700 hover:text-white transition duration-300'>Subscribe</Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Priceing