/* eslint-disable react-hooks/exhaustive-deps */
import { verifyToken } from "@/api";
import { CourseDetailPage } from "@/components";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Course = () => {
  const token = localStorage.getItem("token");
  const currentUserFromStorage = localStorage.getItem("user");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidToken, setIsValidToken] = useState<boolean>(false);

  const currentUser = currentUserFromStorage
    ? JSON.parse(currentUserFromStorage as string)
    : null;

  useEffect(() => {
    const checkToken = async () => {
      setIsLoading(true);
      try {
        if (!token || !currentUser) {
          setIsValidToken(false);
          toast.error("No user found, Please login again");
          navigate("/login");
          return;
        }
        const response = await verifyToken(token as string);

        if (!response.id) {
          setIsValidToken(false);
          toast.error("Invalid token");
          navigate("/login");
          return;
        }

        if (response.id !== currentUser.id) {
          setIsValidToken(false);
          toast.error("Invalid token");
          navigate("/login");
          return;
        }

        setIsValidToken(true);
        toast.success("User verified");
      } catch (error) {
        toast.error("Invalid token" + error);
        setIsValidToken(false);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  return isLoading ? (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-10">
      <p>Redirecting, Please wait....</p>
      <Loader className="animate-spin" size={32} />
    </div>
  ) : (
    <>{isValidToken && <CourseDetailPage />}</>
  );
};
