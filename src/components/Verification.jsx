
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";




const renderButton = (buttonProps) => {

    return (
      <button {...buttonProps} className="font-semibold text-gray-400">
        {buttonProps.remainingTime !== 0 ? `Resend: ${buttonProps.remainingTime} sec` : "Resend"}
      </button>
    );
};

const renderTime = () => React.Fragment;




const Verification = () => {

    const [otp, setOtp] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.state);


    useEffect( () => {

        if(otp.length === 6){
            if(otp === '123456'){
                navigate('/success', {replace:true});
            }
            else {
                alert("Type otp 123456 for success.")
            }
        }

    },[otp, navigate]);


    return (

        !location.state ? (<h1> Verification Failed.. </h1>) : 

        (

            <div className="flex flex-col h-screen">
            
                <div className="flex justify-between">
                    <Navbar />
                    {/* <p>Hello</p> */}
                    <span className='p-6 lg:absolute bottom-0'>
                        <Footer />
                    </span>
                </div>


                <div className="flex justify-center sm:h-full sm:items-center">
                    
                    <div className="flex lg:justify-center sm:w-2/5 lg:w-1/2 mx-2 ">
                        
                        <div className='flex flex-col sm:justify-center ml-4 lg:w-3/5'>
                            <div>
                                <h1 className='font-bold text-2xl mb-8 w-full lg:text-3xl' > Enter the verification code to continue</h1>
                                <p className="text-gray-500 w-full"> We sent to <span className="text-blue-600 font-semibold"> {`${location.state.email}${location.state.domain}`} </span>. If you don't see it, check your spam. </p>


                                <div className="otpInpt mt-7">

                                    <OTPInput 
                                        className="flex justify-between"
                                        value={otp} 
                                        onChange={setOtp} 
                                        autoFocus 
                                        OTPLength={6} 
                                        otpType="number" 
                                        disabled={false} 
                                        inputStyles={{border: '1.5px solid #007FFF', borderRadius:"6px", width:'35px', height:'35px' }}   
                                        
                                    />

                                    <div className="flex flex-row mt-5">

                                        <div className="mr-auto font-semibold text-blue-700 cursor-pointer" onClick={() => navigate(-1)}>
                                            Back
                                        </div>

                                        <ResendOTP 
                                            className="mr-1"
                                            renderButton={renderButton} 
                                            renderTime={renderTime} 
                                            timeInterval={1000}    
                                        />

                                    </div>
                                    

                                </div>


                            </div>

                        </div>
                        
                    </div> 


                    {/* showing the cards of right panel.. */}
                    <div className="hidden ml-4 md:block">
                        <Cards />
                    </div>
                    
                </div>
            

            </div>

        )

            
    )

}

export default Verification;