"use client"
import Input from "@/components/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { name, email, password, confirmPassword } = data;
    const body = {
      name,
      email,
      password,
      confirm_password: confirmPassword,
    }

    const response = await fetch(process.env.BACKEND_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.status === 201) {
      const response = await fetch(process.env.BACKEND_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
  
      const result = await response.json();
  
      if (response.status === 200) {
        const cookies = new Cookies();
        cookies.set("token", result.token, { path: "/" });
        router.push("/");
      } else {
        alert(result.error || result.message);
      }
    } else {
      alert(result.error || result.message);
    }
  };

  return (
    <>
      <h1 className="font-dm text-4xl font-bold">Get Started</h1>
      <p className="text-lg text-gray-500 font-medium">
        Join us in cultivating a greener future. Register now.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-4 flex flex-col gap-4"
      >
        <Input register={register} errors={errors} id="name" label="Name" />
        <Input register={register} errors={errors} id="email" label="Email" />
        <Input
          register={register}
          errors={errors}
          id="password"
          label="Password"
          type="password"
        />
        <Input
          register={register}
          errors={errors}
          id="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <button type="submit" className="w-full bg-primary py-3 text-white text-lg font-semibold rounded-lg mt-4">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
