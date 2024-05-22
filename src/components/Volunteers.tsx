import {useState} from 'react'
import Footer from './Footer'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Volunteers = () => {
    const [navOpen,setNavOpen]=useState(false);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <>
    <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden flex-grow justify-evenly">
                <a href="./home" className='hover:text-accent flex items-center'>HOME</a>
                <a href="./whatwedo" className='hover:text-accent flex items-center'>WHAT WE DO</a>
                <a href="./impact" className='hover:text-accent flex items-center'>IMPACT</a>
                <a href="./volunteers" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>VOLUNTEERS</a>
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
    <div className='w-full flex flex-col items-center'>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>THANK YOU FOR SHOWING YOUR INTEREST</h1>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>VOLUNTEERS ARE ALWAYS WELCOME</h1><br/>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>REGISTER TO BECOME AN <span className='bg-accent text-white'>AIR AMBASSADOR</span></h1>
        <span className='text-xl md:text-3xl my-2 text-center'>We'd love to visit your school, Air Campus aims to create awareness about Air Pollution</span>
        <span className='text-xl md:text-3xl my-2 text-center'>We visit schools to schools to create awareness.</span>
        <span className='text-xl md:text-3xl my-2 text-center'>Submit your school name with proper data, we'll be in contact with you soon</span>
        <div className="my-10 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-full mx-96">
  <h2 className="text-black font-bold text-center text-2xl">Volunteer Form</h2>
        <div className='flex flex-col md:flex-row md:gap-6'>
            <div className="w-full flex flex-col gap-2">
            <span>Name</span>
    <input placeholder="Your Name" name="name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
    <span>Your Class</span>
    <input placeholder="Your Class" name="class" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
    <span>Your Contact Number</span>
    <input placeholder="Your Contact Number" name="contact" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
            </div>
            <div className="w-full flex flex-col gap-2">
            <span>School Name</span>
    <input placeholder="School Name" name="school" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
    <span>School Address</span>
    <input placeholder="School Address" name="schooladdress" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
    <span>Your School Contact Number</span>
    <input placeholder="Your School Contact Number" name="schoolcontact" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
            </div>
        </div>
        <div className="py-5 flex justify-center">

            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg">Submit Form</button>
        </div>
        </div>
        
{/* </div> */}


        <Footer/>
    </div>
    </>
  )
}

export default Volunteers
