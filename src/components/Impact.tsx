import {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Footer from './Footer';


const Impact = () => {
    const [navOpen,setNavOpen]=useState(false);
    
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div className='min-h-screen font-montserrat'>
                <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden gap-3 justify-evenly flex-grow">
                <a href="./home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="./whatwedo" className='hover:text-accent flex items-center'>WHAT WE DO</a>
                <a href="./impact" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>IMPACT</a>
                <a href="./volunteers" className='hover:text-accent flex items-center'>VOLUNTEERS</a>
                <a href="/donate" className='px-2 py-2 text-white rounded-full bg-accent hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>DONATE</a>
            </div>
            <button onClick={toggleNav} className='flex md:hidden justify-center items-center w-10 h-10 border-black rounded-lg m-3 hover:text-white hover:bg-black'>
            {navOpen?<IoMdClose className="w-6 h-6 text-black"/>:<RxHamburgerMenu className="w-6 h-6 text-black"/>}

            </button>
        </header>
        <div>
        <div className={navOpen?'w-full text-white':'hidden'}>
            <div className='text-black flex flex-col gap-3 text-xl w-full items-center pb-3'>
                <a href="./home" className="hover:text-blue-500">HOME</a>
                <a href="./whatwedo" className="hover:text-blue-500">WHAT WE DO</a>
                <a href="./impact" className="hover:text-blue-500">IMPACT</a>
                <a href="./volunteers" className="hover:text-blue-500">VOLUNTEERS</a>
                <a href="/donate" className="hover:text-blue-500">DONATE</a>
            </div>
            </div>
        </div>
        <div className='flex justify-center'>

        <h1 className='pt-16 text-center text-black text-2xl md:text-4xl font-extrabold space-x-5 w-full md:w-2/3'>AIR CAMPUS AIMS TO CREATE AWARENESS AMONG YOUTH ABOUT</h1>
        </div>
        <div className='flex justify-center'>
            <span className='bg-accent text-4xl text-white text-center px-3 py-2'>AIR POLLUTION</span>
            
            </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-10 my-6 justify-items-center'>
            <img src="./impact1.png" alt="" />
            <img src="./impact2.png" alt="" />
            <img src="./impact3.png" alt="" />
            <img src="./impact4.png" alt="" />
            <img src="./impact5.png" alt="" />
        </div>
        <img src="./cleanair.png" alt="" />
        <div className='flex justify-center bg-background pb-16 lg:pb-24'>
            <a href="./volunteers"><span className="font-extrabold text-2xl sm:text-4xl md:text-6xl text-accent">Join the Movement</span></a>

            </div>
        <Footer/>
    </div>
  )
}

export default Impact
