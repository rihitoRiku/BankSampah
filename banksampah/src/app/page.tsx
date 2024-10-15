"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Page() {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>("nasabah");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
1

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const openLoginModal = () => {
    setRegisterModal(false);
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const openRegisterModal = () => {
    setLoginModal(false);
    setRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  const submitLoginHandler = async () => {
    let reqbody;
    if(selectedRole === "nasabah"){
      reqbody = {
        "role":"nasabah",
        "password": password
      }
    }else{
      reqbody = {
        "role":"pengelola",
        "username": username,
        "password": password,
      }
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxJgrnuH6jnS4Wd_61qx88Wbp0ULjJwbT-ZTUjDoEu-hqIHpCVCBqRs88BwrOHZbCCZ/exec?login=check', {
        method: 'GET',
        // mode: "no-cors",
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(reqbody),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      // Handle the response data here, e.g., save a token, redirect, etc.
      console.log('Login successful', data);
    } catch (error) {
      console.error('There was a problem with the login request:', error);
      // Handle the error, e.g., show an error message to the user
    }
    
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:text-gray-100 flex items-center gap-6 lg:gap-16">
      <div className="w-[16rem] min-h-screen relative">
        <Image src="Assets/MainPattern.svg" fill alt="Picture of the author" />
      </div>
      <div className="max-w-screen-md min-h-screen pe-8 flex flex-col justify-between">
        <div className="mt-10 lg:mt-16 size-14 lg:size-16 place-self-start bg-green-500 rounded-2xl"></div>
        <div className="">
          <h3
            className="text-5xl lg:text-6xl mb-10 font-semibold "
            style={{ lineHeight: 1.2 }}
          >
            Building a Sustainable Future Together
          </h3>
          <p
            className="text-lg lg:text-xl font-normal mb-24 text-gray-800"
            style={{ lineHeight: 1.5 }}
          >
            Join us in transforming waste into value. At Bank Sampah, we are on
            a mission to create a cleaner environment by turning recyclable
            waste into opportunities. Together, we can make a difference by
            responsibly managing our waste and building a greener future for our
            community.
          </p>
          <button
            className="w-max px-6 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:opacity-90 transition duration-300 me-4 lg:me-6"
            onClick={openLoginModal}
          >
            Masuk
          </button>
          <button
            className="w-max px-6 py-3 lg:px-10 lg:py-4 font-semibold hover:opacity-90 transition duration-300 border rounded-full "
            onClick={openRegisterModal}
          >
            Registrasi Nasabah
          </button>
        </div>
        <div className="size-12"></div>
      </div>

      {/* Login Modal */}
      {loginModal && (
        <>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
          <div className="fixed top-0 start-0 w-screen h-screen z-30 px-4">
            <div className="relative max-w-lg min-h-[28rem] w-full bg-white rounded-xl px-10 py-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IoClose
                onClick={closeLoginModal}
                className="absolute right-3 top-3 md:right-4 md:top-4 cursor-pointer text-5xl md:text-6xl text-gray-600"
              />

              <h3 className="text-3xl lg:text-4xl font-semibold mb-4">Masuk</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                iste hic quod?
              </p>
              <div>
                <div className="mb-3 py-4 px-2">
                  {/* Peran (radio button) */}
                  <div className="mb-2">
                    <label
                      htmlFor="radioadmin"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Sebagai
                    </label>
                    <div id="radioadmin" className="flex gap-4 w-full">
                      <label
                        htmlFor="role"
                        className={`cursor-pointer flex items-center border text-gray-900 text-lg rounded-lg w-full ps-10 p-2 ${
                          selectedRole === "nasabah"
                            ? "border-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          id="role"
                          type="radio"
                          value="nasabah"
                          name="role"
                          className="w-4 h-4 hidden peer"
                          onChange={() => handleRoleChange("nasabah")}
                        />
                        <span>Nasabah</span>
                      </label>

                      <label
                        htmlFor="role2"
                        className={`cursor-pointer flex items-center border text-gray-900 text-lg rounded-lg w-full ps-10 p-2 ${
                          selectedRole === "pengelola"
                            ? "border-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          id="role2"
                          type="radio"
                          value="pengelola"
                          name="role"
                          className="w-4 h-4 hidden peer"
                          onChange={() => handleRoleChange("pengelola")}
                        />
                        <span>Pengelola</span>
                      </label>
                    </div>
                  </div>

                  {selectedRole == "nasabah" ? (
                    <>
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-lg font-medium text-gray-900"
                        >
                          Kata sandi
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg className="w-4 h-4 dark:text-gray-400"></svg> */}
                          </div>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-10 p-2"
                            placeholder="yourpassword"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Username */}
                      <div className="">
                        <label
                          htmlFor="username"
                          className="block mb-2 text-lg font-medium text-gray-900"
                        >
                          Username
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg className="w-4 h-4 dark:text-gray-400"></svg> */}
                          </div>
                          <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-10 p-2"
                            placeholder="name@flowbite.com"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-lg font-medium text-gray-900"
                        >
                          Kata sandi
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg className="w-4 h-4 dark:text-gray-400"></svg> */}
                          </div>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-10 p-2"
                            placeholder="yourpassword"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Button */}
                  <button
                    type="button"
                    onClick={submitLoginHandler}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-medium w-full"
                  >
                    Konfirmasi!
                  </button>
                </div>
              </div>
              <div className="float-right me-4">
                <p>
                  Belum punya akun?{" "}
                  <span onClick={openRegisterModal} className="text-blue-600 cursor-pointer">
                    registrasi nasabah
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Registrasi */}
      {registerModal ? (
        <>
          <div className="">
            <>
              <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
              <div className="fixed top-0 start-0 w-screen h-screen z-30 px-4">
                <div className="relative max-w-lg min-h-[28rem] w-full bg-white rounded-xl px-10 py-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <IoClose
                    onClick={closeRegisterModal}
                    className="absolute right-3 top-3 md:right-4 md:top-4 cursor-pointer text-5xl md:text-6xl text-gray-600"
                  />

                  <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
                    Registrasi Nasabah
                  </h3>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum iste hic quod?
                  </p>
                  <form action="">
                    <div className="mb-3 py-4 px-2">
                      {/* Peran (radio button) */}

                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-lg font-medium text-gray-900"
                        >
                          Kata sandi
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg className="w-4 h-4 dark:text-gray-400"></svg> */}
                          </div>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-10 p-2"
                            placeholder="yourpassword"
                          />
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        type="button"
                        // onClick={submitLoginHandler}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-medium w-full"
                      >
                        Daftarkan!
                      </button>
                    </div>
                  </form>
                  <div className="float-right me-4">
                    <p>
                      Sudah punya akun?{" "}
                      <span onClick={openLoginModal} className="text-blue-600 cursor-pointer">
                        masuk
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          </div>
        </>
      ) : null}
    </div>
  );
}
