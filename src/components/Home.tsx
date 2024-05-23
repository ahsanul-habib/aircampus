import {useState,useEffect} from 'react'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from 'axios';
import DailyQuotes from './DailyQuotes';
import Footer from './Footer';


const AirWarning=
    {
        "Dhaka": "Dangerous air quality in Dhaka today! Protect your health – limit outdoor activities, use masks, and stay indoors when possible. Share with loved ones!",
        "Khulna": "IQAir Lists Khulna's AQI as 'unhealthy,' indicating potential health risks. Watch for any symptoms like coughing or difficulty breathing. If air quality worsens, reduce strenuous activity outdoors.",
        "Chittag.": "Air quality is currently unhealthy for sensitive groups. Limit outdoor activity and consider wearing a mask. Monitor air quality reports regularly.",
        "Barishal": "The air is currently hazardous and poses a serious health risk. Drink plenty of fluids to stay hydrated and help clear your lungs. If you experience coughing, wheezing, or difficulty breathing, consult a doctor.",
        "Mymen.": "Ambient air quality has reached concerning levels. Air pollution is putting a strain on hospitals. Protect yourself and others, stay indoors!",
        "Rajshahi": "Elevated levels of air pollutants necessitate immediate action to protect public health. Consider using an air purifier indoors, especially if you have respiratory problems. Limit strenuous outdoor activity, especially if you have respiratory issues.",
        "Rangpur": "Current air quality poses a significant health risk to the population. Stay informed about air quality levels. Check local news or air quality monitoring websites. Close windows and doors to keep polluted air outside.",
        "Sylhet": "Current environmental factors are conducive to respiratory distress, particularly among vulnerable populations. If possible, reschedule outdoor activities to avoid exposure."
      }

      
      
      type Regions = {
          [key: string]: number;
        };
        
        
        const Home = () => {
            const [navOpen,setNavOpen]=useState(false);
            const [sortedArray, setSortedArray] = useState<[string, number][]>([]);
            const [largestNumber, setLargestNumber]=useState(0);
            const toggleNav=()=>{
                setNavOpen(prev=>!prev);
            }
            const firstCity =sortedArray[0]? sortedArray[0][0]:'';
            // const firstCity = "Dhaka";
    function getRandomItem<T>(array: T[]): T {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }
    const Quote=getRandomItem(DailyQuotes);
    // let largestNumber=0;
    const fetchData=async ()=>{
        const data=await axios.get("https://aircampus-backend2.onrender.com");
        const mainData=data.data;
        console.log(mainData);
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
            <div className="md:flex hidden gap-3 md:flex-grow justify-evenly">
                <a href="#" className='border-2 hover:bg-accent hover:text-white px-2 py-1 border-accent flex'>HOME</a>
                <a href="./whatwedo" className='hover:text-accent flex items-center'>WHAT WE DO</a>
                <a href="./impact" className='hover:text-accent flex items-center'>IMPACT</a>
                <a href="./volunteers" className='hover:text-accent flex items-center'>VOLUNTEERS</a>
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
                <a href="./whatwedo" className="hover:text-blue-500">WHAT WE DO</a>
                <a href="./volunteers" className="hover:text-blue-500">VOLUNTEERS</a>
                <a href="./impact" className="hover:text-blue-500">IMPACT</a>
                <a href="/donate" className="hover:text-blue-500">DONATE</a>
            </div>
            </div>
        </div>
        <img className='w-full' src="./herophoto.jpg" alt="" />
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
                    <span className='text-black'><span className='text-black font-bold'>{Quote.title}</span><br></br>{Quote.main}</span>
                </div>
                <div>
                    <div>
                    <span className="bg-red-500 text-white py-1 px-3 rounded-xl">Air Warning</span>
                    </div>
                    <span className='text-black'>{
                    firstCity === 'Dhaka' 
                    ? "Dangerous air quality in Dhaka today! Protect your health – limit outdoor activities, use masks, and stay indoors when possible. Share with loved ones!"
                    : firstCity === 'Khulna' 
                      ? "IQAir Lists Khulna's AQI as 'unhealthy,' indicating potential health risks. Watch for any symptoms like coughing or difficulty breathing. If air quality worsens, reduce strenuous activity outdoors."
                      : firstCity === 'Chittag.'
                        ? "Air quality is currently unhealthy for sensitive groups. Limit outdoor activity and consider wearing a mask. Monitor air quality reports regularly."
                        : firstCity === 'Barishal'
                          ? "The air is currently hazardous and poses a serious health risk. Drink plenty of fluids to stay hydrated and help clear your lungs. If you experience coughing, wheezing, or difficulty breathing, consult a doctor."
                          : firstCity === 'Mymen.'
                            ? "Ambient air quality has reached concerning levels. Air pollution is putting a strain on hospitals. Protect yourself and others, stay indoors!"
                            : firstCity === 'Rajshahi'
                              ? "Elevated levels of air pollutants necessitate immediate action to protect public health. Consider using an air purifier indoors, especially if you have respiratory problems. Limit strenuous outdoor activity, especially if you have respiratory issues."
                              : firstCity === 'Rangpur'
                                ? "Current air quality poses a significant health risk to the population. Stay informed about air quality levels. Check local news or air quality monitoring websites. Close windows and doors to keep polluted air outside."
                                : firstCity === 'Sylhet'
                                  ? "Current environmental factors are conducive to respiratory distress, particularly among vulnerable populations. If possible, reschedule outdoor activities to avoid exposure."
                                  : ''

                    }</span>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col items-center'>
                <img src="./2.jpg" alt="" />
                <img src="./homehero.jpg" alt="" />
                <img src="./4.jpg" alt="" />
                <img src="./5.jpg" alt="" />
                <img src="./6.jpg" alt="" />
        </div>
        <div>

            <div className="bg-accent2 flex justify-center py-6">
                <span className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-white w-full md:w-3/4 lg:3/5 text-center">LET’S FIGHT TOGETHER AGAINST AIR POLLUTION</span>
            </div>
            <div className="flex justify-center">
            <img src="./cleanair.png" alt="" />

            </div>
            <div className='flex justify-center bg-background pb-16 lg:pb-24'>
            <a href="./volunteers"><span className="font-extrabold text-2xl sm:text-4xl md:text-6xl text-accent">Join the Movement</span></a>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
