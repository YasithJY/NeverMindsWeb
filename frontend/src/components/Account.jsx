import React, { useState } from "react";
import { FaEnvelope, FaLock, FaPlusCircle } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "./SideBar";
import userimg from "../assets/person.png";

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (setter) => (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, "");
    setter(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !re.test(value) && value ? "Please enter a valid email address" : ""
    );
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    setPasswordError(
      value.length > 0 && value.length < 8
        ? "Password must be at least 8 characters"
        : ""
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-8 lg:px-10 mt-8">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 p-4 sm:p-6 bg-white rounded-lg w-full container mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">Account</h1>
        <p className="text-gray-600 font-semibold">
          Manage Your Profile and Personalize Your Experience
        </p>
        <hr className="border-yellow-500 my-4" />

        {/* Profile Picture Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={userimg}
              alt="Profile"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Profile Picture</p>
              <p className="text-sm font-semibold text-gray-500">
                PNG, JPEG under 15MB
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-semibold">
            <button className="bg-white border border-gray-500 px-4 py-2 rounded-md text-sm">
              Upload new picture
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
              Delete
            </button>
          </div>
        </div>

        {/* Full Name Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Full name</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <input
              type="text"
              value={firstName}
              onChange={handleNameChange(setFirstName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={handleNameChange(setLastName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="Last name"
            />
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Contact Email Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Contact email</h2>
          <p className="text-sm font-semibold text-gray-500">
            Manage your account's email address
          </p>

          {/* Email Input and Button */}
          <div className="relative mt-2 flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Email Input */}
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                value={email}
                onChange={validateEmail}
                onBlur={validateEmail}
                className={`border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } pl-10 pr-4 py-2 w-full rounded-md`}
                placeholder="Email address"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            {/* Add Another Email Button */}
            <div className="flex justify-end sm:justify-start">
              <button className="font-semibold border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-50 transition w-[180px]">
                <FaPlusCircle className="text-green-600" />
                Add another email
              </button>
            </div>
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Password Section */}
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h2 className="font-semibold">Password</h2>
              <p className="text-sm font-semibold text-gray-500">
                Modify your current password
              </p>
            </div>
            <div className="flex gap-2">
              <button className="font-semibold bg-white border border-gray-500 px-4 py-2 rounded-md text-sm">
                Confirm password
              </button>
              <button className="font-semibold bg-gray-100 px-4 py-2 rounded-md text-sm">
                Cancel
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative w-full sm:w-1/2">
                <FaLock className="absolute left-3 top-3 text-yellow-500" />
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
                  placeholder="Current password"
                />
              </div>
              <div className="relative w-full sm:w-1/2">
                <FaLock className="absolute left-3 top-3 text-yellow-500" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className={`border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } pl-10 pr-4 py-2 w-full rounded-md`}
                  placeholder="New Password"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Account Security Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Account security</h2>
          <p className="text-sm font-semibold text-gray-500">
            Manage your account security
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <button className="flex items-center font-semibold gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
              <BiLogOut /> Log out
            </button>
            <button className="flex items-center font-semibold gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm">
              <MdOutlineDelete /> Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
