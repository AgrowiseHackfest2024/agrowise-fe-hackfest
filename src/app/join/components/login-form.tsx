import Input from "@/components/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
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
  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

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
      </form>
      <button className="w-full bg-primary py-3 text-white text-lg font-semibold rounded-lg mt-4">
        Login
      </button>
    </>
  );
};

export default LoginForm;
