// import { Search } from "lucide-react";
// import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export const NavbarComponent = () => {
  const navigation = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const val = localStorage.getItem("token");
    setToken(val);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigation("/login");
  };
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
        {token && token.length > 0 ? (
          <Button
            className={"bg-[#39b2ad] p-5 cursor-pointer hover:bg-[#3e807d]"}
            onClick={handleLogout}
          >
            Logout
            <LogOut />
          </Button>
        ) : (
          <Button
            className={"bg-[#39b2ad] p-5 cursor-pointer hover:bg-[#3e807d]"}
            onClick={() => navigation("/login")}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
