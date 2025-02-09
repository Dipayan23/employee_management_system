import React, { useState } from "react";

const Login = () => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //To handle the behavior of form submissio
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email," and ",password);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="text-black">
      {/* Container */}
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className=" relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
          {/* Buttons */}
          <div className="max-w-60 mx-auto flex justify-center mb-10">
            <h1 className="text-xl font-bold md:text-2xl text-black-500 pb-4 px-2">
              Log In
            </h1>
          </div>
          <div className="mx-auto w-full max-w-md">
            {/* Form */}
            <div className="mx-auto mb-4 max-w-md pb-4">
              <form
                onSubmit={(e) => {
                  submitHandler(e);
                }}
                name="wf-form-password"
                method="get"
              >
                <div className="relative flex flex-col">
                  <div className="font-bold mb-1 text-left">Email</div>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="mb-6 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <div className="font-bold mb-1 text-left">Password</div>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Password (min 8 characters)"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  value="Join Us"
                  className=" inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
