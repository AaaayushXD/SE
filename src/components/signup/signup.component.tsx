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

export const SignUpComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center m-4 min-h-[80vh]">
      <Card className=" shadow-sm flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Please sign up to create an account.
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-6">
          <div className="flex gap-3 flex-wrap grow">
            <CardContent className="flex flex-col gap-2 grow">
              <Label htmlFor="fname">First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                id="fname"
                className=""
              />
            </CardContent>
            <CardContent className="flex flex-col gap-2  grow">
              <Label htmlFor="lname">Last Name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                id="lname"
                className=""
              />
            </CardContent>
          </div>
          <CardContent>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="eg. xyz@abc.com" id="email" />
          </CardContent>
          <CardContent>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="password" id="password" />
          </CardContent>
          <CardContent>
            <Label htmlFor="cPassword">Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm Password"
              id="cPassword"
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
