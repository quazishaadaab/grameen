import React from 'react'

function Sidebar() {
  return (
    // the sidebar
    <div className='flex-[15%] bg-[#111111] max-h-[100%] pl-2 rounded'>

    {/*the header where the logo is  */}
    <div className=" h-[10%] flex items-center justify-center p-3 space-x-2">

        <div className="h-[40px]  w-[40px] p-3"></div>

    <div >
        <div className=" text-sm text-white font-bold md:text-xs 2xl:text-sm">GrameenCanada Co.</div>
        <div className="text-sm text-[#A5A5A5] md:text-xs 2xl:text-sm"> Toronto,Ontario</div>

    </div>
        
        </div>


{/* main menu */}
    <div className=" h-[45%] items-center p-3">
        
        <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">MAIN MENU</div>
<div className=" h-[90%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}
<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>

<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>



<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>








</div>


    </div>
{/* workloads */}
    <div className=" h-[25%] items-center p-3">

    <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">WORK LOAD</div>
<div className=" h-[80%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}
<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


</div>



    </div>

    {/* general */}
    <div className="h-[15%] items-center p-3">

    <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">GENERAL</div>

<div className=" h-[70%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}
<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>




</div>

    </div>
 

</div>


)
}

export default Sidebar