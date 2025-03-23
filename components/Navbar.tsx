'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // Simulate auth state — later you can connect to real auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out!');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white shadow">
      <Link href="/" className="text-xl font-bold">
        TextVerse
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/feed">Feed</Link>
        {!isLoggedIn ? (
          <Link href="/login">Login</Link>
        ) : (
          <button onClick={handleLogout} className="hover:text-red-400">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
