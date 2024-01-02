"use client";

import { useState } from "react";
import LanguageSelector from "./languageSelector";
import Head from "next/head";

interface Categories {
  "i don't": string;
  family: string;
  friend: string;
  other: string;
  professional: string;
  romantic: string;
}

export default function Index() {
  const t: { [key: string]: { [key: string]: string | Categories } } = {
    EN: {
      name: "Gia Jung",
      question: "In what context do you know Gia?",
      email: "hi",
      categories: {
        "i don't": "I Don't",
        family: "Family",
        friend: "Friend",
        other: "Other",
        professional: "Professional",
        romantic: "Romantic",
      },
    },
    한글: {
      name: "정지아",
      question: "지아를 어떤 상황에서 알고 계신가요?",
      email: "안녕하세요",
      categories: {
        "i don't": "모르시겠어요",
        family: "가족",
        friend: "친구",
        other: "기타",
        professional: "직장",
        romantic: "연인",
      },
    },
  };

  const [clicked, setClicked]: [boolean, Function] = useState(false);

  const [l, setLanguage] = useState("EN"); // Default to 'EN'

  const setCategory = (category: string) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("category", category);
      if (category === "family") {
        window.location.href = `/family`;
      } else {
        window.location.href = `/about`;
      }
    }
  };

  return (
    <div className="bg-white p-10 text-gray-800">
      <Head>
        <title>Gia Jung Personal Site</title>
        <meta
          name="description"
          content="Gia Jung is a computational designer and software engineer based in New York City. Harvard M.Arch, Sidewalk Labs, Google, Sequoia."
        />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-10 text-gray-800">
        <LanguageSelector onLanguageChange={setLanguage} />
        {!clicked ? (
          <h1 className="text-4xl mb-2 font-bold">
            <button
              className="hover:text-gray-600"
              onClick={() => setClicked(!clicked)}
            >
              {t[l].name as string}
            </button>
          </h1>
        ) : (
          <>
            <p className="text-3xl mb-2 font-bold">{t[l].question as string}</p>
            <select
              className="w-full md:w-1/2 lg:w-1/3 h-12 mt-4 mb-8 px-4 py-2 border-2 border-gray-300 rounded-lg"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {Object.entries(t[l].categories as Categories).map(
                ([key, category]: [string, string]) => (
                  <option value={key} key={key}>
                    {category}
                  </option>
                ),
              )}
            </select>
          </>
        )}
        <p className="text-lg">
          <a href="mailto:hi@giajung.com" className="hover:text-gray-600">
            {t[l].email as string}@giajung.com
          </a>
        </p>
        <footer className="absolute bottom-4">
          <p className="text-sm">
            {`© ${new Date().getFullYear()} `}
            <a
              href="https://www.linkedin.com/in/giajung/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              {t[l].name as string}
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
