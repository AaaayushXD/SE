import { ChevronRight } from "lucide-react";
import banner from "/old.png";
import bannerImg from "/banner-img.svg";
export const LandingComponent = () => {
  return (
    <div className="w-full h-[700px] relative py-10 overflow-hidden bg-gradient-to-r from-[#f5fafd] to-[#e6f7f8]">
      <img
        src={banner}
        alt="Banner Background"
        className="absolute w-full h-full object-cover opacity-40 z-0 top-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-8 gap-8 relative z-10">
        <div className="max-w-[600px] text-center lg:text-left flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-extrabold text-[#0a0a0a] leading-tight">
            Empower Your Future with{" "}
            <span className="text-[#02aaa4]">Expert Courses</span>
          </h1>
          <p className="text-lg text-[#555555]">
            Discover thousands of high-quality courses to boost your skills and
            achieve your career goals.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#02aaa4] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#019d97] transition duration-300 flex justify-center items-center cursor-pointer">
              Get Started <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={bannerImg}
            alt="Learning"
            className="max-w-full h-auto animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};
