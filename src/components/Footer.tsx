import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-accent text-white md:pt-20'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-48 md:mb-7' src="/logo.jpg" alt="" />
                <div className='flex flex-col gap-1 text-xl w-full items-center mb-7'>
                    <a href="/home" className="hover:text-blue-500">HOME</a>
                    <a href="/whatwedo" className="hover:text-blue-500">WHAT WE DO</a>
                    <a href="/volunteers" className="hover:text-blue-500">VOLUNTEERS</a>
                    <a href="/impact" className="hover:text-blue-500">IMPACT</a>
                    <a href="/donate" className="hover:text-blue-500">DONATE</a>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-center'>Air Campus, a part of Let's Breathe Well Campaign by RUET IPE Club! Join us in our mission to promote clean air and a healthier environment within your campus and beyond.</span>
                <img className='my-5 px-9' src="/footerlogo.jpg" alt="" />
                <span className="block font-bold text-2xl md:text-4xl text-center my-8">#CleanAirStartsFromUs</span>
            </div>
            <div className='text-2xl flex justify-center'>
                <div className='mb-10 md:mb-0'>

                <span className='font-bold'>
                    Get In Touch
                </span><br />
                <span>Address: RUET,Rajshahi</span><br/><br/>
                <span>Helpline: 01783370029</span><br/><br/>
                <span>Email: info@aircampus.org</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
