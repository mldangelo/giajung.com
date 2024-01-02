"use client";

import "./globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";
import LanguageSelector from "./languageSelector";

const t: { [key: string]: { [key: string]: string } } = {
  EN: {
    name: "Gia Jung",
  },
  한글: {
    name: "정지아",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("EN"); // Default to 'EN'
  const [updatedChildren, setUpdatedChildren] = useState(children);

  useEffect(() => {
    const updatedChildren = React.Children.map(children, (child) => (
      <React.Fragment key={language}>
        {React.cloneElement(child as React.ReactElement, { language })}
      </React.Fragment>
    ));
    setUpdatedChildren(updatedChildren);
  }, [language, children]);

  return (
    <html lang="en">
      <Head>
        <title>Gia Jung Personal Site</title>
        <meta
          name="description"
          content="Gia Jung is a computational designer and software engineer based in New York City. Harvard M.Arch, Sidewalk Labs, Google, Sequoia."
        />
      </Head>
      <body className="h-min-screen bg-white text-gray-800">
        <React.Fragment key={language}>
          <LanguageSelector onLanguageChange={setLanguage} />
          {updatedChildren}
          <footer className="absolute w-full m-0 flex flex-col items-center justify-center inset-x-0 bottom-0 h-16">
            <p className="text-sm">
              {`© ${new Date().getFullYear()} `}
              <a
                href="https://www.linkedin.com/in/giajung/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                {t[language].name as string}
              </a>
            </p>
          </footer>
        </React.Fragment>
      </body>
    </html>
  );
}
