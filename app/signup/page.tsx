import Link from "next/link";
import React from "react";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[url('/cryptologin.jpg')] bg-cover bg-no-repeat flex items-center justify-center relative z-10">
      {/* Background overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-20"></div>

      {/* Signup Card */}
      <div className="bg-[#1e157d] rounded-lg shadow-lg w-full max-w-[466px] z-30 relative my-20">
        {/* Top Section with Curve */}
        <div className="bg-[#3d2bfb] text-white h-[212px] flex flex-col items-center justify-center text-center py-8 relative rounded-t-lg px-6">
          <h1 className="text-[30px] font-[600]">Create Your Account</h1>
          <p className="mt-2 text-lg">Sign up to access Crypto Stock India</p>
        </div>

        {/* Curve border */}
        <div className="w-full border-l-[233px] border-[#3d2bfb] border-l-transparent border-r-[233px] border-r-transparent border-t-[50px]"></div>

        {/* Form Section */}
        <form className="px-6 py-8">
          <div className="mb-4">
            <label
              className="block font-semibold text-[#a5a1cb] mb-1"
              htmlFor="fullname"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full h-[50px] px-3 py-2 rounded-md border border-[rgba(255,255,255,0.3)] focus:border-[1px] focus:border-[#3d2bfb] transition-all duration-500 ease-in-out bg-transparent text-white outline-none focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-semibold text-[#a5a1cb] mb-1"
              htmlFor="email"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-[50px] px-3 py-2 rounded-md border border-[rgba(255,255,255,0.3)] focus:border-[1px] focus:border-[#3d2bfb] transition-all duration-500 ease-in-out bg-transparent text-white outline-none focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-semibold text-[#a5a1cb] mb-1"
              htmlFor="username"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              className="w-full h-[50px] px-3 py-2 rounded-md border border-[rgba(255,255,255,0.3)] focus:border-[1px] focus:border-[#3d2bfb] transition-all duration-500 ease-in-out bg-transparent text-white outline-none focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              className="block font-semibold text-[#a5a1cb] mb-1"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-[50px] px-3 py-2 rounded-md border border-[rgba(255,255,255,0.3)] focus:border-[1px] focus:border-[#3d2bfb] transition-all duration-500 ease-in-out bg-transparent text-white outline-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#3d2bfb] h-[50px] hover:bg-[#3a39d6] text-white py-2 px-4 rounded transition-colors"
          >
            SIGN UP
          </button>
        </form>

        {/* Footer */}
        <div className="text-center pb-4">
          <h1 className="font-semibold text-[#a5a1cb]">
            Already have an account?{" "}
            <span className="text-white cursor-pointer">
              <Link href={"/login"}>Login here</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

// "use client";

// import React from "react";
// import Link from "next/link";
// import { User, Mail, Globe, Key, Link as LinkIcon } from "lucide-react";

// const SignUpPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-4">
//       <div className="w-full max-w-2xl">
//         {/* Logo */}
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src="/logo.png"
//             alt="Cryptostockindia"
//             className="h-12 w-auto mb-2"
//           />
//           <h1 className="text-xl font-semibold text-gray-800">Sign Up</h1>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* First Name & Last Name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <User className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>

//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <User className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="grid grid-cols-1">
//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <Mail className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>
//           </div>

//           {/* Country */}
//           <div className="grid grid-cols-1">
//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <Globe className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Country"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>
//           </div>

//           {/* Affiliate */}
//           <div className="grid grid-cols-1">
//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <LinkIcon className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Affiliate"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>
//           </div>

//           {/* Password & Confirm Password */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <Key className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>

//             <div className="group flex items-center rounded-l-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//               <div className="bg-[#fcd784] px-3 h-full flex items-center justify-center transition-all duration-300 group-focus-within:bg-yellow-500">
//                 <Key className="text-gray-700 w-5 h-5" />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full px-3 py-3 outline-none"
//               />
//             </div>
//           </div>

//           {/* Register Button */}
//           <div className="group flex items-center rounded-md bg-white shadow overflow-hidden transition-all border-transparent duration-300 outline-none">
//             <button
//               type="submit"
//               className="w-full cursor-pointer bg-[#fcd784] text-gray-800 font-semibold py-3 hover:bg-yellow-500 transition-all duration-300"
//             >
//               Register
//             </button>
//           </div>

//           {/* Already have an account */}
//           <div className="text-center text-sm text-gray-700">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="text-[#fcd784] font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
