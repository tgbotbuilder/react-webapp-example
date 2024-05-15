'use client'

import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log(window.Telegram?.WebApp)
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-10 lg:p-24">
      <h1 className="text-3xl font-bold text-center">Telegram Bot Builder webapp</h1>
      {
        isMounted
          ? (
            <pre>
              {JSON.stringify(window?.Telegram?.WebApp, null, 2)}
            </pre>
          )
          : <Loader />
      }
    </main>
  );
}
