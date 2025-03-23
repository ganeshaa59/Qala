// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Sidebar from "../components/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "TextVerse",
//   description: "A platform for poets and writers",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased flex dark:bg-gray-950 dark:text-white`}
//       >
        
//         <Sidebar />
//         <main className="ml-64 w-full px-6 py-6 min-h-screen bg-gray-50 dark:bg-gray-900">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }


// import './globals.css'
// import SignupPage from './SignupPage/page'   // 👈 Import the signup page

// export default function RootLayout() {
//   return (
//     <html lang="en">
//       <body>
//         <SignupPage />  {/* 👈 Render signup page on startup */}
//       </body>
//     </html>
//   )
// }

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


