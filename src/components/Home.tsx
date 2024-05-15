import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Home = () => {
    const [navOpen,setNavOpen]=useState(false);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
  return (
    <div className='font-poppins'>
        {/* <div className={sidebarOpen?"absolute top-0 left-0 w-full":"hidden top-0 left-0 w-full"}> */}
        {/* <div className='fixed w-5/6 h-full bg-white z-20 border-r-2 border-black'>
            <div className="flex w-full justify-between items-center">
            <span className='flex justify-center w-full h-10 text-3xl font-extrabold mb-2 text-white'>Air Campus</span>
            <button onClick={()=>setSidebarOpen(false)} className='flex justify-center items-center w-10 h-10 border-black border-2 rounded-lg m-3 hover:text-white hover:bg-black'>
            <IoMdClose className="w-8 h-8"/>

            </button>
            </div>
            <div className='flex flex-col gap-3 text-xl w-full items-center'>
                <a className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500">HOME</a>
                <a className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500">WHAT WE DO</a>
                <a className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500">VOLUNTEER</a>
                <a className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500">IMPACT</a>
                <a className="border-b-2 border-black hover:text-blue-500 hover:border-blue-500">DONATE</a>
            </div>
        </div> */}

        {/* </div> */}
        <header className='h-16 bg-primary flex w-full justify-between items-center px-4 text-white'>
            <a href="#" className='font-extrabold text-2xl'>Air Campus</a>
            <div className="md:flex hidden gap-3">
                <a href="#" className='border-2 hover:bg-blue-500 hover:text-white px-2 py-1 border-black'>HOME</a>
                <a href="#" className='hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>WHAT WE DO</a>
                <a href="#" className='hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>VOLUNTEER</a>
                <a href="#" className='hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>IMPACT</a>
                <a href="#" className='hover:border-b hover:border-blue-500 hover:text-blue-500 flex items-center'>DONATE</a>
            </div>
            <button onClick={toggleNav} className='flex md:hidden justify-center items-center w-10 h-10 border-black rounded-lg m-3 hover:text-white hover:bg-black'>
            {navOpen?<IoMdClose className="w-6 h-6 text-white"/>:<RxHamburgerMenu className="w-6 h-6 text-white"/>}

            </button>
        </header>
        <div>
        <div className={navOpen?'w-full bg-primary text-white':'hidden'}>
            <div className='flex flex-col gap-3 text-xl w-full items-center pb-3'>
                <a className="hover:text-blue-500">HOME</a>
                <a className="hover:text-blue-500">WHAT WE DO</a>
                <a className="hover:text-blue-500">VOLUNTEER</a>
                <a className="hover:text-blue-500">IMPACT</a>
                <a className="hover:text-blue-500">DONATE</a>
            </div>
            </div>
        </div>
        <div className='flex justify-center bg-secondary'>

        <iframe
    //   width="560"
      width={window.innerWidth}
    //   height="315"
      height={window.innerWidth*315/560}
      src="https://www.youtube.com/embed/tUghBSNwVHo?si=jclplE2s3VnCdKdU&autoplay=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
        </div>
        <div className="md:p-20 p-5 flex gap-5 flex-col md:flex-row w-full bg-primary">
            <div className='bg-blue-500 w-full md:w-2/5 rounded-lg flex flex-col items-center text-white text-xl p-3 hover:scale-110'>
                <span className="my-1">Air Quality Monitor</span>
                <div className="w-full flex flex-col px-1">
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Dhaka</span>
                        <div className='flex-grow w-full'>
                            <div className="w-full bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Rajshahi</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/4 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Sylhet</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/2 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Khulna</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/5 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Mymen.</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/2 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Chittag.</span>
                            <div className='flex-grow w-full'>
                            <div className="w-3/5 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Rangpur</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/2 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>
                    <div className='flex w-full items-center'>
                        <span className='flex items-center w-32'>Barishal</span>
                        <div className='flex-grow w-full'>
                            <div className="w-1/5 bg-white h-4 rounded-lg"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full md:w-2/5 bg-gren-500 justify-evenly flex flex-col p-1 gap-4'>
                <div className='flex flex-col gap-2'>
                    <div>
                    <span className="bg-blue-500 text-white py-1 px-3 rounded-xl">Data of the Day</span>
                    </div>
                    <span className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
                <div>
                    <div>
                    <span className="bg-red-500 text-white py-1 px-3 rounded-xl">Air Warning</span>
                    </div>
                    <span className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
