"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeSwitcher from "@/app/page-ui/themeswitch/page";

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    setIsToken(!!localStorage.getItem("authToken"));
  }, []);

  const openLoginDialog = () => setIsLoginOpen(true);
  const closeLoginDialog = () => setIsLoginOpen(false);

  const openSignupDialog = () => {
    closeLoginDialog();
    setIsSignupOpen(true);
  };
  const closeSignupDialog = () => setIsSignupOpen(false);

  const openLogoutDialog = () => setIsLogoutOpen(true);
  const closeLogoutDialog = () => setIsLogoutOpen(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.userToken);
      alert("Login Successful");
      closeLoginDialog();
      setIsToken(true); 
      window.location.reload(); 
    } catch (error) {
      alert("Login Failed");
      console.error("Login error:", error.response?.data || error.message);
    }
  };

 
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/signup", {
        username,
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.userToken);
      alert("Signup Successful!");
      closeSignupDialog();
      openLoginDialog();
    } catch (error) {
      alert("Signup Failed");
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logout Successful");
    setIsToken(false);
    closeLogoutDialog();
    window.location.reload(); 
  };

  return (
    <Breadcrumb>
      <BreadcrumbList className="rounded-full w-fit m-auto p-10 py-3 border border-border bg-background shadow-sm shadow-black/5">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="cursor-pointer">
            <Home size={25} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/todo" className="text-lg font-medium">
            To-Do
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbLink>
          {isToken ? (
            <Button onClick={openLogoutDialog} className="cursor-pointer">
              Logout
            </Button>
          ) : (
            <Button onClick={openLoginDialog} className="cursor-pointer">
              Login
            </Button>
          )}
        </BreadcrumbLink>

        <BreadcrumbLink>
          <ThemeSwitcher />
        </BreadcrumbLink>
      </BreadcrumbList>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to Your Account</DialogTitle>
            <br />
            FOR TEST:
            (Email: test@gmail.com)
            (Password: test12345)
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="login-password">Password</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-center font-medium">
              Don't have an{" "}
              <span
                onClick={openSignupDialog}
                className="text-blue-600 font-medium text-lg cursor-pointer"
              >
                account?
              </span>
            </p>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Your Account</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="signup-username">Username</Label>
              <Input
                id="signup-username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to logout?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleLogout} className="bg-red-500">
              Logout
            </Button>
            <Button onClick={closeLogoutDialog} variant="outline">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Breadcrumb>
  );
};

export default NavBar;
