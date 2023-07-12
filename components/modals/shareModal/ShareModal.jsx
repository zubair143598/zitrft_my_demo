import React from 'react'

const ShareModal = ({children}) => {
  return (
    <div>
      <div className="  rounded-2xl bg-black w-screen  md:w-[290px]  md:h-[380px] h-[489px]  lg:w-[280px]  lg:h-[430px] xl:w-[290px] xl:h-[450px] 2xl:w-[300px] 2xl:h-[460px] 3xl:w-[314px] 3xl:h-[489px]">
            {children}
        </div>
    </div>
  )
}

export default ShareModal
