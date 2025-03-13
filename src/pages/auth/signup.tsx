import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type Props = {};

function Signup({}: Props) {
  return (
    <div className="relative h-screen w-full bg-gray-100">
      <div className="inset-x-44 inset-y-14 absolute shadow-xl grid grid-cols-11">
        <div className="col-span-4 bg-gradient-to-b from-orange-600 via-orange-400/80 to-transparent text-transparent">hi</div>
        <div className="col-span-7 bg-white relative">
          <div className="absolute inset-12 min-w-lg mr-36">
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-3">New User?</h1>
              <h1 className="font-semibold text-gray-700">
                This form should only be filled by team leaders only
              </h1>
            </div>
            <form className="space-y-6 mb-11">
              <div className="flex space-x-10 justify-between">
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="focus-visible:ring-1 font-semibold w-60 text-lg border-gray-400 text-gray-500"
                  />
                </div>
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="focus-visible:ring-1 font-semibold w-60 text-lg border-gray-400 text-gray-500"
                  />
                </div>
              </div>
              <div>
                <Label className="font-semibold mb-2">Email ID</Label>
                <Input type="email" className="font-semibold w-full text-lg focus-visible:ring-1 border-gray-400 text-gray-500" placeholder="Enter your email id"/>
              </div>
              <div className="flex space-x-10 justify-between">
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Password must be atleast 6 characters long"
                    className="focus-visible:ring-1 font-semibold w-60 text-lg border-gray-400 text-gray-500"
                  />
                </div>
                <div>
                  <Label className="font-semibold mb-2 text-gray-800">
                    Confirm Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="focus-visible:ring-1 font-semibold w-60 text-lg border-gray-400 text-gray-500"
                  />
                </div>
              </div>
              <div className="flex justify-center">
              <Button className="font-semibold bg-orange-500 text-gray-100 text-lg mt-14 w-52 cursor-pointer" type="submit">Sign up</Button>
              </div>
            </form>
            <Separator className="my-6 text-gray-800"/>
            <h1 className="text-center">Already have an account <span className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">Login</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
