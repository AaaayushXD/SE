import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import { login } from "@/api";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

export const LoginComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!username || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await login(username, password);

      if (!response.id) {
        toast.error("Login failed");
        return;
      }
      console.log({ response });
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error("Login failed" + error);
    } finally {
      setUsername("");
      setPassword("");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center m-4 min-h-[80vh]">
      <Card className="min-w-[600px] shadow-sm flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Welcome back, please login to your account
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <CardContent>
            <Label htmlFor="username">Username</Label>
            <Input
              type="username"
              placeholder="eg.Aayush"
              id="username"
              className="mt-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </CardContent>
          <CardContent>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="password"
              id="password"
              className="mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardFooter className="w-full flex grow ">
            <Button className="cursor-pointer w-full" type="submit">
              {isLoading ? <Loader className="animate-spin" /> : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
