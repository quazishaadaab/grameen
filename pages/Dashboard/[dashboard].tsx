import React from "react";
import Sidebar from "../../components/Sidebar";
function Dashboard() {
  return (
    <div className="flex h-[100%]">
      {/* sidebar is flex 15% */}
      <Sidebar />

      {/* code header here */}

      <div className="flex-[85%] mt-9 items-center  p-5 space-y-4 bg-[#1C1C1C] rounded">
        
        {/* greeting */}
        <div className=" h-[10%] pl-3 items-center  ">
          <div className="text-2xl  h-[60%] md:mt-2 text-white font-[400] 2xl:text-3xl  md:text-2xl 2xl:mt-10 ">
            Dashboard
          </div>
          <div className=" text-sm h-[40%] text-gray-50 ">
            Good to see you again xxx-xxx
          </div>
        </div>


        {/* app spent */}
        <div className="bg-[#111111] h-[45%] flex p-2 space-x-3 rounded">
          {/* chart */}
          <div className="flex-[70%] relative z-0 p-2">
            <div className="  text-base text-white font-[400] w-[50%] h-[10%] absolute z-20">
              {" "}
              App Spent Summary
            </div>
            <div className=" h-[100%] w-[100%] z-10 p-6">charts</div>
          </div>

          {/* financials */}
          <div className="flex-[30%] pt-3 items-center">
            <div className="items-center h-[50%] w-[100%] p-1">
              <div className="h-[40%] w-[100%] 2xl:text-6xl md:text-5xl text-white  ">
                $328
              </div>
              <div className="h-[20%] w-[100%] md:text-xs 2xl:text-base text-[#8D8D8D] pt-4 ">
                Spent this month
              </div>
              <div className=" h-[20%] w-[100%] md:text-xs 2xl:text-base text-[#8D8D8D] pt-5 ">
                All spent Summary
              </div>
            </div>

            <div className="h-[50%] w-[100%] items-center space-y-2">
              <div className=" h-[45%] w-[100%] text-3xl p-2 text-white ">36</div>
              <div className=" h-[10%%] w-[20%] text-sm p-2 text-blue-400 border rounded md:text-xs 2xl:text-sm hover:text-blue-400 border-blue-400 cursor-pointer">
                All Apps
              </div>
            </div>
          </div>
        </div>
        {/* flex div */}
        <div className="flex space-x-5 h-[36%] max-h-[36%] overflow-y-hidden ">
          {/* worflows */}

          <div className="bg-[#111111] h-[100%] w-[55%] p-5 rounded">
            <div className=" h-[10%] w-[100%] text-start text-white ">
              Workflows
            </div>

            <div className="flex h-[90%]  ">
              <div className="h-full w-[50%]">
                
                <div className="mb-3">

                <div className="text-3xl font-bold text-white mt-2">26</div>
                <div className='md:text-xs 2xl:text-sm text-slate-500'>Active Workflows</div>
                </div>
                
                <div className='md:text-sm  2xl:text-base font-[400]    text-[#8D8D8D]'>
                    <div>Onboarding</div>
                    <div>Vendor Risk Assesment</div>
                    <div>Vendor Renewal</div>
                    <div>Attestation Report</div>
                </div>

              </div>
              
              
              <div className=" w-[50%]">

              <div className="mb-3">

<div className="text-3xl font-bold text-white mt-2">8</div>
<div className='md:text-xs 2xl:text-sm text-slate-500'>Drafts Workflows</div>
</div>

<div className='md:text-sm text-[#8D8D8D] 2xl:text-base'>
    <div>Onboarding</div>
    <div>Vendor Risk Assesment</div>
    <div className='mt-3 text-blue-700'>See All</div>

</div>
              
              
              
              </div>
            
            
            
            </div>
          </div>
          {/* mytasks */}
          <div className="bg-[#111111] h-[100%] w-[45%] p-5 rounded">
          

{/* header of myTasks */}
          <div className="flex h-[10%]">
          <div className=" text-white w-[90%]">MyTasks</div><div className="w-[10%] text-sm">See All</div>
          </div>

{/* ciruclar progress bars */}
          <div className=" h-[90%]">

                <div className=" h-[50%] ">

                <div className="flex h-full">
                <div className="bg-green-200  flex-[20%]">Progress Bar</div>

                <div className=" space-y-1 flex-[80%] items-center pl-3">

                <div className='text-base text-white'>Oboarding Salsabilla Hampton</div>
                <div className="text-sm text-[#8D8D8D] pl-1">Provision access for Basecamps</div>
                <div className="text-sm  text-[#8D8D8D] pl-1">Provision access for Zeplin</div>

                </div>
             </div>


            </div>





<div className=" h-[50%] ">
<div className="flex h-full">
                <div className="bg-green-200  flex-[20%]">Progress Bar</div>

                <div className=" space-y-1 flex-[80%] items-center p-3">

                <div className='text-base text-white'>Oboarding Salsabilla Hampton</div>
                <div className="text-sm text-[#8D8D8D] pl-1">Provision access for Basecamps</div>
                <div className="text-sm  text-[#8D8D8D] pl-1">Provision access for Zeplin</div>

                </div>
             </div>

</div>

          </div>


          
          
          </div>
        </div>
        {/* flex div */}
      </div>
    </div>
  );
}

export default Dashboard;
