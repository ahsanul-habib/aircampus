import {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Footer from './Footer';

const WhatWeDo = () => {
    const [navOpen,setNavOpen]=useState(false);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div>
      <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="/logo.jpg" alt="" /></a>
            <div className="md:flex hidden flex-grow justify-evenly">
                <a href="/home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="/whatwedo" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>WHAT WE DO</a>
                <a href="/impact" className='hover:text-accent flex items-center'>IMPACT</a>
                <a href="/volunteers" className='hover:text-accent flex items-center'>VOLUNTEERS</a>
                <a href="/donate" className='hidden md:flex px-2 py-2 text-white rounded-full bg-accent hover:border-b hover:border-blue-500 hover:text-blue-500 items-center'>DONATE</a>
            </div>
            <button onClick={toggleNav} className='flex md:hidden justify-center items-center w-10 h-10 border-black rounded-lg m-3 hover:text-white hover:bg-black'>
            {navOpen?<IoMdClose className="w-6 h-6 text-black"/>:<RxHamburgerMenu className="w-6 h-6 text-black"/>}

            </button>
        </header>
        <div>
        <div className={navOpen?'w-full bg-white text-black':'hidden'}>
            <div className='flex flex-col gap-3 text-xl w-full items-center pb-3'>
                <a href="/home" className="hover:text-blue-500">HOME</a>
                <a href="/whatwedo" className="hover:text-blue-500">WHAT WE DO</a>
                <a href="/volunteers" className="hover:text-blue-500">VOLUNTEERS</a>
                <a href="/impact" className="hover:text-blue-500">IMPACT</a>
                <a href="/donate" className="hover:text-blue-500">DONATE</a>
            </div>
            </div>
        </div>
        <div  className='flex flex-col'>
            <img src="/whatwedo1.jpg" alt="" />
            <img src="/whatwedo2.jpg" alt="" />
            <img src="/whatwedo3.jpg" alt="" />
            <img src="/whatwedo4.jpg" alt="" />
            <img src="/whatwedo5.jpg" alt="" />
            <img src="/whatwedo6.jpg" alt="" />
            <img src="/whatwedo7.jpg" alt="" />
            <img src="/whatwedo8.jpg" alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default WhatWeDo;
