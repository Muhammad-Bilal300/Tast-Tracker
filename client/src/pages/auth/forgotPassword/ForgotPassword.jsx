import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col my-auto gap-y-6">
      <div className="flex gap-x-4 justify-center items-center">
        <div className="bg-blue-600 w-[35px] h-[35px] rounded-md flex justify-center items-center">
          <FaCheckDouble className="text-white text-[20px]" />
        </div>
        <h3 className="text-[24px] text-black font-bold">
          <span className="text-blue-600">Task</span> Tracker
        </h3>
      </div>
      <div className="w-[30%] px-5 py-3 rounded-md shadow-md blur-0 shadow-blue-700">
        <h4 className="text-[22px] font-semibold flex justify-center">
          Forgot Password
        </h4>
        <p className="text-[14px] text-gray-500 flex justify-center">
          Enter your email below to verify and send OTP
        </p>
        <div className="py-6 flex flex-col gap-y-5">
          <div className="h-[40px] bg-gray-100 rounded-md w-[100%] px-2 flex items-center">
            <input
              className="outline-none border-no ne w-full bg-transparent"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-3 pb-5">
          <button className="bg-blue-600 text-white text-center text-[16px] font-semibold h-[40px] w-full rounded-md">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
