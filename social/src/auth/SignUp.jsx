import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailPasswordValidation } from "@/utils/constants";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import AuthForm from "@/root/shared/AuthForm";

function SignUp() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const [validation, setValidation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = emailPasswordValidation(password, email);
    console.log(isValid);
    if (isValid) {
      return setValidation(isValid);
    } else {
      setValidation("");
    }
    const { data } = await axios.post("/signup", {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    toast({ title: data.message });
    if (data.status === true) {
      navigate("/signin");
    }
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col w-5/12">
      <AuthForm
        title={"oikos"}
        details={"Create a New Account"}
        subDetails={"to use Oikos enter your details please"}
      />
      <h1 className="p-3 mb-3 text-4xl">Sign-Up</h1>
      <form
        className="text-black flex justify-center items-center flex-col w-full"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          className="shad-input mb-2"
          ref={username}
          placeholder="enter your username"
        />{" "}
        <Input
          type="email"
          className="shad-input mb-2"
          ref={email}
          placeholder="enter your email"
        />
        <Input
          type="password"
          className="shad-input mb-2"
          ref={password}
          placeholder="enter your password"
        />
        <Button type="submit" className="w-full">
          Sign-Up
        </Button>
      </form>
      <h4 className="text-red-900 font-bold tracking-wider">{validation}</h4>
      <h4 className="py-4">
        already have an account{" "}
        <Link className="text-[#f66803] " to={"/sigin"}>
          login
        </Link>
      </h4>
    </div>
  );
}

export default SignUp;
