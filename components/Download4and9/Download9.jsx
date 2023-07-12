/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import Location from '../Location'
import { RiAccountCircleLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';


const Download9 = () => {
    const { mymetadata, sidebarstate } = useSelector((state) => state.meta);
    const [num, setNum] = useState(0);
  return (
    <>
      <div className="bg-[#ffff00] h-[100vh] w-full flex-col justify-center items-center ">
        
        <div className="h-[20%] w-full flex">
          <div className="flex-1 flex items-center ml-5">
            
              
              <img className="w-[147px]" src={"/assets/ZTFR.png"} alt="" />
              
          
          </div>
          <div className="flex-1 flex-row flex justify-end items-center"> 
          <div className=' relative h-full flex items-center'>
          <RiAccountCircleLine className='absolute right-[7rem] w-[20px] h-[25px]'/> 
          <div className='mr-5'> <Location className=' absolute right-2'/> 
          </div>
          </div>
          </div>
        </div>

        <div className="h-[60%] w-full  flex justify-center items-center">
          
          <div className="flex-1  h-full relative flex flex-col justify-center items-center">
          <div className='' >

              <img
                src='/assets/Tick Download Large.png'
                alt=""
                className=" lg:w-[468px] sm:w-[300px] w-[300px]  "
                />
                </div>
          <div className='absolute left-[55%] ' >
          <p className="mt-[60px] tracking-[2px] absolute   uppercase   ">
              revision <br /> files
            </p>
            <p className='mt-[120px] tracking-[2px] uppercase text-[20px] sm:text-[27px] absolute' >complete</p>
          </div>
          
          
          </div>
          {/* <div className="flex-1 h-full"></div> */}
        </div>

        <div className="h-[20%] w-full flex">
          <div className="flex-1 tracking-[1px] flex items-end text-[10px] mb-5 ml-5 text-silver">
            ZITRANSFER 2023
            <br /> ALL RIGHTS RESERVED &nbsp; ZITRANSFER IS PART OF THE ZINO
            GROUP
          </div>

          <div className="flex-1 tracking-[.5px] flex items-end text-[10px] mb-5 mr-5 text-silver">
            |@ ZITRANSFER USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO
            PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.
          </div>
        </div>
      </div>
  </>
  )
}

export default Download9