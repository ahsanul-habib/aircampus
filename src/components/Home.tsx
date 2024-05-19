import {useState,useEffect} from 'react'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from 'axios';
// import LocationData from './LocationData';

type Regions = {
    [key: string]: number;
  };


const Home = () => {
    const [navOpen,setNavOpen]=useState(false);
    const [sortedArray, setSortedArray] = useState<[string, any][]>([]);
    const [largestNumber, setLargestNumber]=useState(0);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
    // let largestNumber=0;
    const fetchData=async ()=>{
        const data=await axios.get('https://corsproxy.io/?https%3A%2F%2Faircampus-backend.onrender.com%2FgetData');
        const mainData=data.data;
        const arr = Object.entries(mainData as {[key: string]: any });
        arr.sort((a, b) => b[1] - a[1]);
        setLargestNumber(arr[0][1]);
        setSortedArray(arr);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='font-montserrat'>
        <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden gap-3">
                <a href="#" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>HOME</a>
                <a href="./aboutus" className='hover:text-accent flex items-center'>ABOUT US</a>
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
        <div className={navOpen?'w-full bg-white text-black':'hidden'}>
            <div className='flex flex-col gap-3 text-xl w-full items-center pb-3'>
                <a href="./home" className="hover:text-blue-500">HOME</a>
                <a href="./aboutus" className="hover:text-blue-500">ABOUT US</a>
                <a href="./impact" className="hover:text-blue-500">IMPACT</a>
                <a href="./blogs" className="hover:text-blue-500">BLOGS</a>
                <a href="./ruetipe" className="hover:text-blue-500">RUET IPE Club</a>
                <a href="#" className="hover:text-blue-500">DONATE</a>
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
        <div className="md:p-20 p-5 flex gap-5 flex-col md:flex-row w-full bg-white">
            <div className='bg-accent w-full md:w-2/5 rounded-lg flex flex-col items-center text-white text-xl p-3'>
                <span className="my-1">Air Quality Monitor</span>
                <div className="w-full flex flex-col px-1">
                    {sortedArray.map((item,i)=>
                        <div key={i} className='flex w-full items-center'>
                        <span className='flex items-center w-32'>{item[0]}</span>
                        <div className='flex-grow w-full'>
                            <div className={`bg-white justify-center items-center group flex h-5 rounded-lg ${item[1] ? `w-[${((item[1]*100)/largestNumber)}%]` : ''}`}>
                                <span className="text-black font-bold text-sm hidden group-hover:flex">{item[1]}µg/m³</span>
                            </div>
                        </div>
                    </div>
                    )

                    }

                </div>
            </div>
            <div className='w-full md:w-2/5 bg-gren-500 justify-evenly flex flex-col p-1 gap-4 text-xl'>
                <div className='flex flex-col gap-2'>
                    <div>
                    <span className="bg-accent text-white py-1 px-3 rounded-xl">Data of the Day</span>
                    </div>
                    <span className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
                <div>
                    <div>
                    <span className="bg-red-500 text-white py-1 px-3 rounded-xl">Air Warning</span>
                    </div>
                    <span className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
