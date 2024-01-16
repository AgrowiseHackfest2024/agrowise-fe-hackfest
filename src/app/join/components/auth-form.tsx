"use client";

import Input from "@/components/input";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-[60%]">
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p className="text-center mt-2">
        {isLogin ? "Don't have account?" : "Already have an account?"}{" "}
        <span
          className="cursor-pointer hover:underline text-primary"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {!isLogin ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
