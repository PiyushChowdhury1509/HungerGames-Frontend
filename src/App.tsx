import { Mail, LockKeyholeIcon } from "lucide-react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="px-8 border border-b-2 border-gray-900 rounded-lg shadow-xl">
        <div className="m-4 my-7">
          <div className="mb-6">
            <div className="mb-2">
              <h1 className="font-bold text-blue-600 mb-3 text-4xl">
                Sign In
              </h1>
            </div>
            <div className="mb-3">
              <Label className="mb-2">Email</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="your email"
                  className="pl-10 focus-visible:ring-2"
                />
                <Mail className="absolute inset-y-2 left-2 text-gray-500" />
              </div>
            </div>
            <div className="mb-3">
              <Label className="mb-2">Password</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="your password"
                  className="pl-10 focus-visible:ring-2"
                />
                <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-500" />
              </div>
            </div>
          </div>
          <Separator />
          <div className="mt-3">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white mb-2 w-full !important">
              Sign In
            </Button>

            <p>
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer">Create an account</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
