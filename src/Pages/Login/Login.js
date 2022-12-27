import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold my-4 text-center">
        This is login page
      </h3>
      <div className="md:h-screen flex justify-center items-center">
        <form className="flex flex-col gap-4 border-2 p-12 rounded-lg shadow-lg shadow-indigo-500/40">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <Button type="submit" gradientDuoTone="greenToBlue">
            Submit
          </Button>
          <p>
            Do not have an account?{" "}
            <Link to="/register" className="underline">
              Register here
            </Link>
          </p>
          <Button gradientDuoTone="purpleToBlue">Or, Sign in with GOOGLE</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
