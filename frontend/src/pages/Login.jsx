import { Suspense, useEffect, useState } from 'react'
import Authanimation from '../components/ui/authanimation'
import Button from '../components/ui/button'
import { Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader"
import { backendURL } from "../utils/constants";


function Login() {
    const [loading, _] = useState(false);

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const handleInputChange = (e) => {
      setFormData((prev)=>({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    const submitHandler = async()=>{
       const response = await fetch(`${backendURL}/user/login`,{
        method : "POST",
        body : JSON.stringify(formData),
        headers : {
          "Content-Type" : "application/json"
        },
        credentials : 'include'
       })
       if(response.status==200){
        const data = await response.json()
        console.log(data);
       }
    }
   
  return (
    <>
    <main className="flex flex-col sm:flex-row items-center justify-center sm:items-start mt-24  gap-12 sm:gap-6">
    <div className="w-[40%] sm:p-0 lg:p-24 lg:pt-0 -z-10">
      <Suspense fallback={``}>
      <Authanimation />
      </Suspense>
    </div>
    <div className="w-[40%] rounded-lg shadow-md md:p-10">
					<h3 className="text-center text-[22px] leading-9 font-bold mb-10">
						Hello! <span className="text-primary "> Welcome</span> Back
					</h3>
					<section className="space-y-6">
						<div>
							<input
								type="email"
								placeholder="Enter Your Email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-priC text-[16px] leading-7 text-head placeholder:text-textC rounded-md cursor-pointer"
							/> 
						</div>

            <div>
							<input
								type="password"
								placeholder="Enter Your Password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-head placeholder:text-textC rounded-md cursor-pointer"
							/> 
						</div>

            <div className="">
            <Button
								disabled={loading}
                onClick={submitHandler}
									className={`w-full rounded-lg py-3 px-4`}
								>
									{loading? <HashLoader cssOverride={{padding:".75rem 0"}} size={25} color="#ffffff" />:'Login'}
								</Button>
							</div>
            <p className="text-head text-center cursor-pointer">
              Don&apos;t have an account?
              <Link to='/signup' className="text-primary font-medium ml-1">
              Register
              </Link>
            </p>
					</section>
				</div>
  </main>
  </>
  )
}

export default Login

