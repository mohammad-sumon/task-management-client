import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState("");
  const {createUser} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email1.value;
    const password = form.password1.value;
    console.log(name, email, password);


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        alert("Successfully Register");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });

  }

    return (
        <div>
      <h3 className="text-3xl font-semibold my-4 text-center">
        This is Register page
      </h3>
      <div className="md:h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border-2 p-12 rounded-lg shadow-lg shadow-indigo-500/40">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <p className="text-red-600">{error}</p>
          <Button type="submit" gradientDuoTone="greenToBlue">Submit</Button>
          <p>Already an account? <Link to="/login" className="underline">Login here</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Register;