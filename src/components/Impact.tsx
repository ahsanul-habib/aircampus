import {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";


const Impact = () => {
    const [navOpen,setNavOpen]=useState(false);
    
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div className='min-h-screen font-montserrat'>
                <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden gap-3">
                <a href="./home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="./aboutus" className='hover:text-accent flex items-center'>ABOUT US</a>
                <a href="./impact" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>IMPACT</a>
                <a href="./blogs" className='hover:text-accent flex items-center'>BLOGS</a>
                <a href="./ruetipe" className='hover:text-accent flex items-center'>RUET IPE Club</a>
                <a href="#" className='px-2 py-2 text-white rounded-full bg-accent hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>DONATE</a>
            </div>
            <button onClick={toggleNav} className='flex md:hidden justify-center items-center w-10 h-10 border-black rounded-lg m-3 hover:text-white hover:bg-black'>
            {navOpen?<IoMdClose className="w-6 h-6 text-black"/>:<RxHamburgerMenu className="w-6 h-6 text-black"/>}

            </button>
        </header>
        <div>
        <div className={navOpen?'w-full text-white':'hidden'}>
            <div className='text-black flex flex-col gap-3 text-xl w-full items-center pb-3'>
                <a href="./home" className="hover:text-blue-500">HOME</a>
                <a href="./aboutus" className="hover:text-blue-500">ABOUT US</a>
                <a href="./impact" className="hover:text-blue-500">IMPACT</a>
                <a href="./blogs" className="hover:text-blue-500">BLOGS</a>
                <a href="./ruetipe" className="hover:text-blue-500">RUET IPE Club</a>
                <a href="#" className="hover:text-blue-500">DONATE</a>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-10 my-4 justify-items-center'>
            <img src="./impact1.png" alt="" />
            <img src="./impact2.png" alt="" />
            <img src="./impact3.png" alt="" />
            <img src="./impact4.png" alt="" />
            <img src="./impact5.png" alt="" />
        </div>
        <h1 className='text-center text-accent italic text-2xl md:text-4xl font-extrabold'>SWOT ANALYSIS ON SUSTAINABILITY OF THE CAMPAIGN</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:mx-32 my-7 justify-items-center items-center gap-3">
            <div className='flex flex-col items-center justify-center'>
                <span className="block font-extrabold text-4xl text-center text-accent">Stength</span>
                <ul className='list-disc text-xl sm:text-2xl'>
                    <li className=''>Strong Community</li>
                    <li className=''>Industry Collaboration</li>
                    <li className=''>Social Media Content</li>
                    <li className=''>Training Sessions</li>
                </ul>
                <span className="mt-4 block font-extrabold text-4xl text-center text-accent">Opportunities</span>
                <ul className='list-disc sm:text-2xl w-64 md:w-64 text-xl'>
                    <li className=''>Multi-channel approach</li>
                    <li className=''>Initiatives that are focused on taking action</li>
                    <li className=''>Offline presence</li>
                    <li className=''>Institute Collaboration</li>
                </ul>
            </div>
            <div>
                <img className='w-full px-6' src="./impactsquare.png" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className="block font-extrabold text-4xl text-center text-accent">Weaknesses</span>
                <ul className='list-disc w-64 md:w-44 text-xl sm:text-2xl'>
                    <li className=''>Unaware regarding air pollution movement</li>
                    <li className=''>Reliance on online resources</li>
                </ul>
                <span className="mt-4 block font-extrabold text-4xl text-center text-accent">Opportunities</span>
                <ul className='list-disc w-64 md:w-44 text-xl sm:text-2xl'>
                    <li className=''>Social Barriers</li>
                    <li className=''>Conventional behaviour</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Impact
