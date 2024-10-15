// components/Navbar.tsx
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

interface UserData {
  name: string;
  role: string;
}

interface NavbarProps {
  userData: UserData;
}

const Navbar: React.FC<NavbarProps> = ({ userData }) => {
  return (
    <div className="fixed w-screen z-10 bg-white top-0 h-[5rem] border">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between px-3">
        <div className="flex gap-4">
          <div className="size-12 lg:size-14 bg-blue-300 rounded-full"></div>
          <div className="">
            <div className="text-lg">{userData.name}</div>
            <div className="text-green-500 flex items-center gap-2 text-sm lg:text-base">
              <FaCheckCircle />
              {userData.role}
            </div>
          </div>
        </div>

        <div className="">
          <button className="py-2 px-6 border rounded-full flex justify-center items-center gap-2">
            <FiLogOut className="text-lg" />
            <span className="hidden md:block">Keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;