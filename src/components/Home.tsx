import React from 'react'

const Home = () => {
    
  return (
    <div>
        <header className='h-16 bg-ed-500 flex w-full justify-between items-center px-4 text-black'>
            <a href="#">Aircampus</a>
            <div className='flex gap-4'>
                <a href="#" className='border-2 hover:bg-blue-500 hover:text-white px-2 py-1'>HOME</a>
                <a href="#" className='hover:border-b flex items-center'>WHAT WE DO</a>
                <a href="#" className='hover:border-b flex items-center'>VOLUNTEER</a>
                <a href="#" className='hover:border-b flex items-center'>IMPACT</a>
                <a href="#" className='hover:border-b flex items-center'>DONATE</a>
            </div>
        </header>
        <div className='flex justify-center'>

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
        <div className="p-20 flex gap-5">
            <div className='bg-blue-500 w-2/5 rounded-lg flex flex-col items-center text-white text-xl p-3 hover:scale-110'>
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
            <div className='w-3/5 bg-gren-500 h-32 flex flex-col p-1 gap-4'>
                <div className='flex flex-col gap-2'>
                    <div>
                    <span className="bg-blue-500 text-white py-1 px-3 rounded-xl">Data of the Day</span>
                    </div>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
                <div>
                    <div>
                    <span className="bg-red-500 text-white py-1 px-3 rounded-xl">Air Warning</span>
                    </div>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consectetur.</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
