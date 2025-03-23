"use client";
// import { logout } from "@/app/actions/logout";

import Link from 'next/link';
import { useState } from 'react';
import {
  Home,
  Search,
  PlusSquare,
  MessageCircle,
  User,
  Settings,
  Bookmark,
  LogOut,
  Sun,
  Moon,
} from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    alert('Logged out!');
  };



// then in handleLogout:
// const handleLogout = async () => {
//   await logout();
// };


  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col py-8 shadow-2xl">
      <div className="flex items-center justify-center mb-10">
        <Image
          src="/qala-logo.jpg" // Make sure logo is present in /public folder
          alt="Qala Logo"
          width={50}
          height={50}
          className="mr-3"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold leading-tight">Qala</h1>
          <p className="text-sm text-gray-400 w-full text-left">Post your note...</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 flex-grow">
        <Link href="/" className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700">
          <Home size={22} /> Home
        </Link>
        <Link href="/search" className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700">
          <Search size={22} /> Search
        </Link>
        <Link href="/newpost" className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700">
          <PlusSquare size={22} /> New Post
        </Link>
        <Link href="/chat" className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700">
          <MessageCircle size={22} /> Chat
        </Link>
        <Link href="/profile" className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700">
          <User size={22} />
          <span>Profile</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="flex items-center gap-4 py-2 px-2 rounded hover:bg-gray-700 w-full text-left"
          >
            <Settings size={22} /> Settings
          </button>
          {settingsOpen && (
            <div className="absolute left-0 top-12 w-56 bg-gray-800 rounded shadow-xl p-4 z-10">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 py-2 w-full hover:bg-gray-700 rounded px-2"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                Change Theme
              </button>
              <Link
                href="/bookmarked"
                className="flex items-center gap-3 py-2 w-full hover:bg-gray-700 rounded px-2"
              >
                <Bookmark size={20} /> Saved
              </Link>


              {/* <form action={logout}> */}
                <button
                  type="submit"
                  onClick={handleLogout}
                  className="flex items-center gap-3 py-2 w-full hover:bg-gray-700 rounded px-2 text-red-400">
                  <LogOut size={20} /> Logout
                </button>
            {/* </form> */}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
