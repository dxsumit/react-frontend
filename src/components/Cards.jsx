

const Cards = () => {

    return (

        <div className="mx-2 relative z-0">

            <div className='flex flex-col justify-center bg-blue-600 rounded-2xl px-2 w-4/5 ' style={{height: "480px"}}>
                <div className="mx-auto">
                    <img src="/rightImage.png" width="200px" height="200px" alt="logo" />   
                </div>

                <div className="mx-10 text-white font-medium text-sm bg-black w-12 pl-2 py-0.5 rounded-lg">
                    NEW
                </div>

                <div className='text-white px-10'>
                    <h1 className='font-bold text-xl mt-2 lg:text-2xl'> Developer handoff improvements </h1>

                    <p className='text-sm pt-5'>
                        You'll now see a highlight around Symbols on the Canvas and in the Inspector.
                    </p>
                </div>

                <div className="text-white px-10 mt-3 py-3 flex justify-between">

                    {/* <div className="">
                        dot
                    </div> */}

                    <div className="flex items-center justify-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>

                    <div className="font-bold text-base cursor-pointer">
                        Share
                    </div>

                </div>

            </div>


            <div className="absolute inset-0 -z-10 bg-blue-700 rounded-2xl w-3/5 h-5/6 left-[100px] top-5 rotate-[5deg] lg:left-[120px]">
            </div>

            <div className="absolute inset-0 -z-20 bg-blue-900 rounded-2xl w-3/5 h-5/6 left-[110px] top-12 rotate-[9deg] lg:left-[125px]">
            </div>


        </div> 

    )
}


export default Cards;
