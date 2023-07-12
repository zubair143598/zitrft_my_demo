/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { BiSolidLockAlt, BiPlus } from 'react-icons/bi';
// import FloatingLabelInput from 'react-floating-label-input';
import { FiMoreVertical } from 'react-icons/fi';
import { sidebaropen, sidebaroff } from '@/src/store/features/metadata';
import { RxCross2 } from 'react-icons/rx';
import { changesharingModal } from '@/src/store/features/modalSlice';
import { shareModal } from '@/lib/constants';

const SideBar = (props, { label, ...rest }) => {
  const [title, setTitle] = useState();
  const [note, setNote] = useState('');
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const router = useRouter();
  const { sidebarstate } = useSelector((state) => state.meta);
  const [isOpen, setIsOpen] = useState(false);

  const mysidebaropen = () => {
    dispatch(sidebaropen('on'));
  };
  const mysidebaroff = () => {
    dispatch(sidebaropen('off'));
  };

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    mysidebaropen();
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
    mysidebaroff();
  };

  const handleSidebarItemClick = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...props.props];
    updatedFiles.splice(index, 1);
    props.setProps(updatedFiles);
  };

  const sidebarStyle = {
    top:'30%',
    marginLeft: '50px',
    height: isOpen ? '362px' : '40px', // Adjust the width when open or closed
    transition: 'width 0.2s ease-in-out',
    backgroundColor: isOpen ? 'black' : 'transparent', // Set the background color to red when open, transparent when closed
  };

  const getContent = () => {
    if (!isOpen) {
      return (
        <div
          className='bg-black relative rounded-r-xl flex lg:h-[330px] 2xl:h-[489px] lg:w-[130px] 2xl:w-[157px] justify-start items-start'
          onClick={handleSidebarToggle}
        >
          {/* <BiSolidLockAlt className='absolute right-2 top-2 text-[#ffff00]' /> */}
          <div className='absolute top-2 right-2'> <img src='/assets/SecurityLockY.png' alt='' className=' w-[12px] h-[15px] mt-2'/> </div>
          <div className=' absolute right-[-130px] top-1/2 mt-[-15px] text-black uppercase text-[8px] w-[250px]  transform -rotate-[270deg] origin-center tracking-[1px]'>
            advanced encryption standard (aes) 256-bit
          </div>
          <div className=' h-full  w-full  flex flex-col justify-center items-center text-[#ffff00] '>
            <div className=' w-[320px] transform -rotate-90 origin-center text-[12px] uppercase tracking-[1px] mb-10'>
              upload files or folders by dropping <br /> them anywhere in this window
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const labelStyle = {
    color: 'yellow',
  };


    const [isFocused, setIsFocused] = useState(false);
  //   const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
  
    const handleFocus = (event) => {
      if (event.target.value.trim() !== '') {
        setIsFocused(true);
      }
    };

  return (
    <div className=''>
      <Drawer
        open={isOpen}
        onClose={handleOverlayClick}
        direction='left'
        style={sidebarStyle}
        className='rounded-xl h-[100px] w-[100px]'
      >
        <div className='relative flex flex-col items-start'>
          <div className='absolute right-[-130px] top-1/2 mt-[-100px] text-black uppercase text-[8px] w-[250px]  transform -rotate-[270deg] origin-center tracking-[1px]'>
            advanced encryption standard (aes) 256-bit
          </div>

          <div className='relative flex flex-row w-full'>
            <div className='uppercase text-black font-bold text-[20px] absolute right-0 top-[-25px]'> upto 1 tb &nbsp; &nbsp; &nbsp; free</div>
             <div className='bg-[#ffff00] w-[70px] h-[70px] absolute flex items-center justify-center'> <img src='/assets/AddIcon.png' alt='' className='w-[60%]'/> </div>
                           <img src='assets/UploadFilesorSelectAFolderY.png' alt='' className='w-[80%] ml-10 mt-4'/>
                          <div className='absolute right-0 mr-4'> <img src='/assets/SecurityLockY.png' alt='' className=' w-[12px] h-[15px] mt-4'/> </div>
          </div>

          <div className={`w-full ${props.props.length === 0 ? '' : 'overflow-y-scroll'} h-[80px]`}>
            {props.props.length > 0 && (
              <div className=''>
                <div className='text-[10px] text-[#ffff00]'>
                {props.props.map((file, index) => (
  <div key={index}>
    <div className='tracking-[2px] font-extrabold flex justify-between'>
      {file.name}
      <RxCross2 className='cursor-pointer' onClick={() => handleRemoveFile(index)} />
    </div>
    <div>{file.size}</div>
  </div>
))}

                </div>
              </div>
            )}
            {props.props.length === 0 && (
              <div className='uppercase text-[40px] tracking-[2px] text-[#ffff00] h-[40px]  ml-32 flex flex-col  w-full p '>
                <div className='flex flex-row'>
                  {' '}
                  <div className='flex flex-row '>up to </div>{' '}
                  <span className='ml-2 text-black'>1 tb</span>{' '}
                </div>
                <div className='text-center text-[20px] mr-20 mt-[-10px]'> free</div>
              </div>
            )}
          </div>

          <div className='w-full mt-2'>
                <div className='w-full flex flex-col items-center justify-center mt-[-20px] '>
      <div id="float-label" className='flex justify-center w-full'>
        <input type="text" {...rest} onFocus={handleFocus} onBlur={handleBlur} className='w-[90%] ml-2' />

        <label htmlFor="email" className='uppercase'>
          title
        </label>
      </div>

      <div id="float-label" className='w-full mt-1 '>
        <textarea {...rest} onFocus={handleFocus} onBlur={handleBlur} className='ml-2 ' style={{ resize: 'none' }}/>

        <label htmlFor="textarea" className='uppercase'>
          Notes
        </label>
      </div>
    </div>
          </div>

          <div>
            <div className='uppercase text-[34px] tracking-[2px]  text-[#ffff00] h-[40px]  flex items-center mx-2 mt-4 cursor-pointer '>
            <img src='/assets/GetALinkY.png' alt='' className='w-[90%]' onClick={()=> {dispatch(changesharingModal(shareModal.sharing))}}/>
             <FiMoreVertical className='cursor-pointer' />
            </div>
            
          </div>

          <div className='mt-4 mr-3 bg-slate-300 h-[100px]'></div>
        </div>
      </Drawer>
      {getContent()}
    </div>
  );
};

export default SideBar;
