// import { Search } from "lucide-react";
// import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
  const navigation = useNavigate();
  return (
    <div className="w-full h-24 border-b  flex justify-between items-center p-4 gap-8 shadow-sm sticky">
      <img
        src="/aayushlogo.png"
        className="w-18 h-20 p-2 rounded-full object-center object-contain"
      />
      {/* <div className="grow relative md:flex hidden transition-all duration-500 ease-in-out">
        <Input type="text" className="h-12" placeholder="Search Courses....." />
        <Search className="absolute right-3 top-3 text-gray-400 hover:text-blue-500 cursor-pointer" />
      </div> */}
      <div className="flex gap-4">
        <Button
          className={buttonVariants({
            variant: "outline",
            className: "text-gray-900 cursor-pointer p-5",
          })}
          onClick={() => navigation("/login")}
        >
          Login
        </Button>
        <Button
          className={"bg-[#39b2ad] p-5 cursor-pointer hover:bg-[#3e807d]"}
          onClick={() => navigation("/sign-up")}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};
