import {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";


const AboutUS = () => {
    const [navOpen,setNavOpen]=useState(false);
    
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div className='font-montserrat'>
                      <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden gap-3">
                <a href="./home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="./aboutus" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>ABOUT US</a>
                <a href="./impact" className='hover:text-accent flex items-center'>IMPACT</a>
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
        <div className='flex justify-center'>
        <span className="font-extrabold text-4xl px-3 py-2 text-center my-12 bg-gray-200">Our Message</span>

        </div>
        <h2 className='px-3 md:px-20 text-xl text-justify'>We are dedicated to promoting constructive social change via our campaign, which is summed up in the phrase "Clean Air Starts From Us." We realize that in order to change the world, we have to change ourselves, which means becoming more conscious of our surroundings. The World Health Organization (WHO) shockingly estimates that air pollution causes <span className='font-bold'>seven million deaths</span> globally each year, and that it is responsible for <span className='font-bold'>20% of premature deaths</span> in Bangladesh. This underlines how urgent it is to improve the quality of the air in our nation, which forms the basis of our campaign. 
<br></br><br></br>Our mission is to inform students in schools, colleges, and universities about the serious effects of air pollution. We aspire to reach a large audience by using a comprehensive approach because we genuinely believe that we can create a world free of air pollution by taking action to clean the air in our local surroundings. We hope to do this in order to save millions of lives annually. </h2>
    <span className=" my-8 block font-bold text-4xl text-center text-accent">#CleanAirStartsFromUs</span>
    <img className="w-full md:w-36" src="./announcement.png" alt="" />
    </div>
  )
}

export default AboutUS
