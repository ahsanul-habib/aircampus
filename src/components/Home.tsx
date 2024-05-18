import {useState,useEffect} from 'react'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from 'axios';
import LocationData from './LocationData';

interface LocationInterface {
    title: string;
    lon: string;
    lat: string;
  }

interface MainDataInterface {
    title: string;
    pm10: number;
    pmPercentage: number;
}

interface RootObject {
    method: string;
    url: string;
    params: Params;
    headers: Headers;
  }
  
  interface Headers {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  }
  
  interface Params {
    lon: string;
    lat: string;
  }

const Home = () => {
    const [navOpen,setNavOpen]=useState(false);
    const [APIData,setAPIData]=useState([]);
    const toggleNav=()=>{
        setNavOpen(prev=>!prev);
    }
    let mainData:MainDataInterface[]=[];
    const fetchOne= async (location:LocationInterface)=>{
        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/current/airquality',
            params: {
            //   lon: '-73.00597',
              lon: location.lon,
            //   lat: '40.71427'
              lat: location.lat
            },
            headers: {
              'X-RapidAPI-Key': '756cf34cb9msh3072bd9bfed2503p19cd05jsn05d599337338',
              'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
          };
          const data=await axios.request(options);
        //   console.log(data.data.data[0].pm10);
          mainData=[...mainData,
            {title:location.title,
            pm10:data.data.data[0].pm10,
            pmPercentage:0}]
        //   console.log(mainData);
    }
    // fetchOne(    {
    //     title: "Dhaka",
    //     lon: "90.4125",
    //     lat: "23.8103"
    //   });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         for (const data of LocationData) {
    //             await fetchOne(data);
    //         }
    //     };

    //     fetchData();
    //     console.log(mainData);
    // }, []);

  return (
    <div className='font-poppins'>
        <header className='h-16 bg-white flex w-full justify-between items-center px-4 text-black'>
            <a href="/" className='w-32'><img src="./logo.jpg" alt="" /></a>
            <div className="md:flex hidden gap-3">
                <a href="#" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>HOME</a>
                <a href="#" className='hover:text-accent flex items-center'>ABOUT US</a>
                <a href="#" className='hover:text-accent flex items-center'>IMPACT</a>
                <a href="#" className='hover:text-accent flex items-center'>BLOGS</a>
                <a href="#" className='hover:text-accent flex items-center'>RUET IPE Club</a>
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
