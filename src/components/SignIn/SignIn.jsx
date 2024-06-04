import LogoWhite from "../../assets/logo.png";
import { Form, useForm } from "react-hook-form";
const SignIn = () => {
  const { control, register } = useForm();
  return (
    <div className="flex min-h-screen items-center flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800">
      <div className="signin-wrapper flex flex-col max-w-[500px] w-full">
        <div className="header flex flex-col items-center">
          <img
            className="w-[175px] h-[86px]"
            src={LogoWhite}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin panel
          </h2>
        </div>

        <div className="mt-10 flex flex-col">
          <Form
            control={control}
            className="space-y-6 flex flex-col flex-grow-0"
          >
            <div>
              <label
                htmlFor="email"
                className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
              >
                Login
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Login"
                  required
                  className={
                    `bg-gray-50 border border-gray-300 text-gray-900 ` +
                    "text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 " +
                    "block w-full p-2 dark:bg-gray-700 dark:border-gray-600 " +
                    "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " +
                    " dark:focus:border-blue-500"
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className={
                    `bg-gray-50 border border-gray-300 text-gray-900 ` +
                    "text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 " +
                    "block w-full p-2 dark:bg-gray-700 dark:border-gray-600 " +
                    "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " +
                    " dark:focus:border-blue-500"
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-[10px] bg-surgu-main-color  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-surgu-main-color-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surgu-main-color-hover"
              >
                Sign in
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
