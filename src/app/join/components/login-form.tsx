"use client";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Cookies from "universal-cookie";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    const body = {
      email,
      password,
    };

    const response = await fetch(process.env.BACKEND_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.status === 200) {
      const cookies = new Cookies();
      cookies.set("token", result.token, { path: "/" });
      router.push("/");
      router.refresh();
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <h1 className="font-dm text-4xl font-bold">Welcome Back!</h1>
      <p className="text-lg text-gray-500 font-medium">
        Embark on your sustainable farming journey with Agrowise.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-4 flex flex-col gap-4"
      >
        <Input register={register} errors={errors} id="email" label="Email" />
        <Input
          register={register}
          errors={errors}
          id="password"
          label="Password"
          type="password"
        />

        <button
          type="submit"
          className="w-full bg-primary py-3 text-white text-lg font-semibold rounded-lg mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
