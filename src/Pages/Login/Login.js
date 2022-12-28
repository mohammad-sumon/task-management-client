import { GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { setUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          <Button onClick={handleGoogleSignIn} gradientDuoTone="purpleToBlue">
            Or, Sign in with GOOGLE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
