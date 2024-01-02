"use client";

import Head from "next/head";
import Link from "next/link";

// Translation object for different languages
const t: { [key: string]: { [key: string]: string } } = {
  EN: {
    text: "Mom and Dad, I love you.",
  },
  한글: {
    text: "엄마 아빠, 사랑해요.",
  },
};

export default function Family({ language: l = "EN" }: { language: string }) {
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
        <h1 className="text-4xl mb-2 font-bold">{t[l].text}</h1>
      </main>
    </div>
  );
}
