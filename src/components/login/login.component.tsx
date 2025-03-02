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

export const LoginComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center m-4 min-h-[80vh]">
      <Card className="min-w-[600px] shadow-sm flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Welcome back, please login to your account
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-6">
          <CardContent>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="eg. xyz@abc.com"
              id="email"
              className="mt-2"
            />
          </CardContent>
          <CardContent>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="password"
              id="password"
              className="mt-2"
            />
          </CardContent>
          <CardFooter className="w-full flex grow ">
            <Button className="cursor-pointer w-full">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
