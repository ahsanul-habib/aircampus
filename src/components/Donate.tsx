import {useState} from 'react'
import Footer from './Footer'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Donate = () => {
    const [navOpen,setNavOpen]=useState(false);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div>
        
       <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden flex-grow justify-evenly">
                <a href="./home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="./whatwedo" className='hover:text-accent flex items-center'>WHAT WE DO</a>
                <a href="./impact" className='hover:text-accent flex items-center'>IMPACT</a>
                <a href="./volunteers" className='hover:text-accent flex items-center'>VOLUNTEERS</a>
                <a href="/donate" className='hidden px-2 py-2 text-white rounded-full bg-accent hover:border-b hover:border-blue-500 hover:text-blue-500 md:flex items-center'>DONATE</a>
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
        <h1 className='text-center text-black text-2xl md:text-4xl font-bold space-x-5 w-full mt-10'>AS AIR CAMPUS IS IN ITS INITIAL PHASE CURRENTLY</h1>
        <div className='flex justify-center mb-20'>
            <span className='bg-accent text-4xl font-bold text-white text-center'>WE'RE NOT ACCEPTING</span>
            </div>
        <h1 className='text-center text-black text-2xl md:text-4xl font-bold space-x-5 w-full'>ANY DONATION</h1>
        <h1 className='text-center text-black text-2xl md:text-4xl font-bold space-x-5 w-full mt-20'>But you can always join our movement with post on Facebook with hashtag</h1>
        <div className='flex flex-col items-center'>
            <img className='w-full md:max-w-[700px]' src="/cleanair.png" alt="" />
        <h1 className='text-center text-black text-2xl md:text-4xl font-extrabold space-x-5 w-full'>BECOME A VOLUNTEER</h1>
        <a href="./volunteers"><span className="font-extrabold text-2xl sm:text-4xl md:text-6xl text-accent">Join the Movement</span></a>

        </div>
        <Footer/>
    </div>
  )
}

export default Donate
