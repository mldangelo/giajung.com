"use client";

import { useState } from "react";
import LanguageSelector from "../languageSelector";
import Head from "next/head";
import Link from "next/link";

export default function Family() {
  const [l, setLanguage] = useState("EN"); // Default to 'EN'

  // Translation object for different languages
  const t: { [key: string]: { [key: string]: string } } = {
    EN: {
      text: "Mom and Dad, I love you.",
      name: "Gia Jung",
    },
    한글: {
      text: "엄마 아빠, 사랑해요.",
      name: "정지아",
    },
  };

  return (
    <div className="bg-white p-10 text-gray-800">
      <Head>
        <title>Gia Jung | Family Page</title>
        <meta
          name="description"
          content="A simple page to express love to my parents."
        />
      </Head>
      <div className="float-left fixed top-0 left-0 p-4">
        <Link href="/">🏠</Link>
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <LanguageSelector onLanguageChange={setLanguage} />
        <h1 className="text-4xl mb-2 font-bold">{t[l].text}</h1>
      </main>
      <footer className="absolute bottom-4 text-center w-full m-0">
        <p className="text-sm">
          {`© ${new Date().getFullYear()} `}
          <a
            href="https://www.linkedin.com/in/giajung/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            {t[l].name}
          </a>
        </p>
      </footer>
    </div>
  );
}
