import { Suspense, useState } from "react";
import Button from "../components/ui/button";
import Authanimation from "../components/ui/authanimation";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { backendURL } from "../utils/constants";

function SignUp() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName : "",
    email : ""
  });

  const handleInputChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async()=>{
    try {
      const response = await fetch(`${backendURL}/user/register`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(formData)
      })
      // if(response.status==201){
      //   const data = await response.json()
      //   console.log(data);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className="flex flex-col sm:flex-row items-center justify-center sm:items-start mt-24  gap-12 sm:gap-6">
        <Suspense>
          <div className="w-[40%] sm:p-0 lg:p-24 lg:pt-0 -z-10">
            <Authanimation />
          </div>
        </Suspense>
        <div className="w-[40%] rounded-lg shadow-md md:p-10">
          <h3 className="text-center text-[22px] leading-9 font-bold mb-10 ">
            Create an <span className="text-primary"> account</span>
          </h3>
          <section className="space-y-6">
            <div className="">
              <input
                type="text"
                placeholder="Create username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>
            <div className="">
              <Button
                disabled={loading}
                // type="submit"
                onClick={submitHandler}
                className={`w-full rounded-lg py-3 px-4`}
              >
                {loading ? (
                  <HashLoader
                    cssOverride={{ padding: ".75rem 0" }}
                    size={25}
                    color="#ffffff"
                  />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
            <p className="mt-5 text-head text-center cursor-pointer">
              Already have an account?
              <Link to="/login" className="text-primary font-medium ml-1">
                Login
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default SignUp;
