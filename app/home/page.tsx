"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";  // Importing sidebar for navigation links

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null); // State to store the logged-in user's info

  useEffect(() => {
    // This useEffect runs on mount to check if the user is authenticated
    const fetchUser = async () => {
      const res = await fetch('/api/user'); // Fetch current user info (you should have an endpoint for this)
      if (res.status === 401) {
        // If not authenticated, redirect to login
        router.push('/LoginPage');
        return;
      }
      const data = await res.json();
      setUser(data.user); // Save user details to state
    };

    fetchUser();
  }, [router]); // Runs only on mount or when the router changes

  // While fetching user data, show a loading state
  if (!user) {
    return <div className="text-center p-4">Loading your homepage...</div>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area on the right */}
      <div className="ml-64 flex-grow bg-gray-100 p-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          {/* Welcome message with username */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Welcome, {user.username} 👋
          </h1>
          <div className="space-y-4 text-center">
            {/* Display user’s mobile number */}
            <p className="text-xl text-gray-700">
              <strong>Mobile:</strong> {user.countryCode} {user.mobile}
            </p>

            {/* Display user’s email */}
            <p className="text-xl text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>

            {/* Additional message */}
            <p className="text-xl text-gray-700 mt-8">
              This is your personal homepage! Explore the sidebar for more options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
