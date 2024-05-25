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
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full mt-14'>THANK YOU FOR SHOWING YOUR INTEREST</h1>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>VOLUNTEERS ARE ALWAYS WELCOME</h1><br/>
       <span className='bg-accent text-white block text center text-2xl md:text-4xl font-bold my-10'>MEET OUR VOLUNTEERS</span>
       <div className='grid grid-cols-1 md:grid-cols-3'>
            <img src="/volunteerperson1.png" alt="" />
            <img src="/volunteerperson2.png" alt="" />
            <img src="/volunteerperson3.png" alt="" />
       </div>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>MEET OUR <span className='bg-accent text-white'>AIR AMBASSADORS</span></h1>
       <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center place-items-center items-center w-full">
            <img src="/volunteerairambassador1.png" alt="" className='h-auto w-auto'/>
            <img src="/volunteerairambassador2.png" alt="" className='h-auto w-auto'/>
            <img src="/volunteerairambassador3.png" alt="" className='h-auto w-auto'/>
            <img src="/volunteerairambassador4.png" alt="" className='h-auto w-auto'/>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center place-items-center items-center w-full">
            <img src="/volunteerairambassador5.png" alt="" className='h-auto w-auto'/>
            <img src="/volunteerairambassador6.png" alt="" className='h-auto w-auto'/>
            <img src="/volunteerairambassador7.png" alt="" className='h-auto w-auto'/>
       </div>
        <h1 className='text-center text-accent text-2xl md:text-4xl space-x-5 w-full my-10'>WE'RE THANKFUL FOR YOUR CONTRIBUTIONS TO MAKING AIR CAMPUS A SUCCESS</h1>
        <h1 className='text-center text-white text-2xl md:text-4xl bg-accent space-x-5 font-bold w-full py-10'>LET'S FIGHT TOGETHER AGAINST <span className='bg-white text-accent'> AIR POLLUTION </span></h1>
        <div className="w-full flex justify-center my-10">

<img src="./cleanair.png" alt="" />
</div>
       <h1 className='text-center text-accent text-2xl md:text-4xl font-bold space-x-5 w-full'>REGISTER TO BECOME AN <span className='bg-accent text-white'>AIR AMBASSADOR</span></h1>
        <span className='text-xl md:text-3xl my-2 text-center'>We'd love to visit your school, Air Campus aims to create awareness about Air Pollution</span>
        <span className='text-xl md:text-3xl my-2 text-center'>We visit schools to schools to create awareness.</span>
        <span className='text-xl md:text-3xl my-2 text-center'>Submit your school name with proper data, we'll be in contact with you soon</span>
  {/* <h2 className="text-black font-bold text-center text-2xl">Volunteer Form</h2>
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
</div> */}
        <div className="my-10 flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-sm w-full mx-96">
        <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf_euvidqAdp7IQEb5YOEIvsZu4S60yJmoNxv--tO9dw4DHBw/viewform?embedded=true"
    //   width="640"
    width='100%'
      height="1160"
    // height='100%'
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
      </div>
        
{/* </div> */}


        <Footer/>
    </div>
    </>
  )
}

export default Volunteers
