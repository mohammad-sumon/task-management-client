import { Button, Navbar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user, setUser, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
        console.error(error);
      });
  };
  

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true} className="shadow-lg shadow-indigo-500/40">
        <Navbar.Brand>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              TASK MANAGEMENT
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/addtask">Add Task</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/mytask">My Task</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/completedtasks">Completed Tasks</Link>
          </Navbar.Link>
          <>
          {
            user?.uid && (
              <>
              <Navbar.Link>
            <Button 
            onClick={handleLogOut}
            size="xs"
              outline={true}
              gradientDuoTone="purpleToBlue">Logout</Button>
          </Navbar.Link>
              </>
            )
          }
          </>
          {/* <Navbar.Link>
            <Link to="/login">Login</Link>
          </Navbar.Link> */}
          <Navbar.Link>
            <Button
              size="xs"
              outline={true}
              gradientDuoTone="tealToLime"
              onClick={handleSwitch}
            >
              Theme
            </Button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

/*
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>



*/
