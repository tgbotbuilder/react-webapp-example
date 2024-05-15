'use client'

import FormatCode from "@/components/FormatCode";
import Loader from "@/components/Loader";
import Profile from "@/components/Profile";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [view, setView] = useState<"profile" | "code">("profile")

  useEffect(() => {
    setIsMounted(true);
    console.log(window.Telegram?.WebApp)
  }, []);

  if (!isMounted) return null;

  const renderCode = () => {
    return isMounted ? <FormatCode /> : <Loader />
  }

  const handleViewChange = () => {
    setView(view === "profile" ? "code" : "profile")
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-2 md:p-10 lg:p-24">
      <h1 className="text-3xl font-bold text-center">Telegram Bot Builder webapp</h1>
      <div className="mt-4">
        <p className="">This is a simple webapp that allows you to build a Telegram bot using the Telegram Bot Builder library.</p>
        <p className="">The library is available on the <a href="https://github.com/tgbotbuilder/react-webapp-example" className="underline text-blue-600">GitHub repository</a>.</p>
      </div>
      <div>
        <button onClick={handleViewChange} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          {view === "code" ? "View Profile" : "View Code"}
        </button>
      </div>
      {
        view === "profile"
          ? <Profile />
          : renderCode()
      }
    </main>
  );
}
