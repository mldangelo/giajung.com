"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import LanguageSelector from "../languageSelector";

const translations: {
  [key: string]: {
    [key: string]: string[] | string | { src: string; alt: string }[];
  };
} = {
  EN: {
    description: `Welcome to my world of cat illustrations! I'm passionate about capturing the whimsy and charm of our feline friends through my art.`,
    name: "Gia Jung",
    title: "Cat Art",
    images: [
      { src: "/goldcats.png", alt: "Cats I" },
      { src: "/pinkcats.png", alt: "Pink Cats" },
      { src: "/goldcats2.png", alt: "Cats II" },
      { src: "/goldcats3.png", alt: "Cats III" },
    ],
  },
  한글: {
    description: `저는 고양이 일러스트로 고양이 친구들의 기발함과 매력을 담아내는 것을 즐깁니다.`,
    name: "정지아",
    title: "고양이 일러스트",
    images: [
      { src: "/green.png", alt: "고양이 I" },
      { src: "/green2.png", alt: "고양이 II" },
      { src: "/green3.png", alt: "고양이 III" },
      { src: "/green4.png", alt: "고양이 IV" },
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState("EN");

  const images = translations[language].images as {
    src: string;
    alt: string;
  }[];

  const [backgroundImage, setBackgroundImage] = useState(images[0].src);
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(true);

  const handleImageInteraction = (image: string) => {
    setBackgroundImage(image);
    setIsTextBoxVisible(false); // Set opacity to 0 for fading effect
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setIsTextBoxVisible(true); // Reset opacity to 1
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>
          {translations[language].name as string} |{" "}
          {translations[language].title as string}
        </title>
        <meta name="description" content="Gallery of Cat Illustrations" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          body {
            transition: background-image 0.5s ease-in-out;
          }
          .hidden-text-box {
            opacity: 0;
            visibility: hidden;
          }
          .visible-text-box {
            opacity: 1;
            visibility: visible;
            transition:
              opacity 0.5s ease-in-out,
              visibility 0.5s ease-in-out;
          }
        `}</style>
      </Head>
      <div className="float-left fixed top-0 left-0 p-4">
        <Link href="/">🏠 {language === "EN" ? "Home" : "홈"}</Link>
      </div>

      <main className="p-5">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        <h1 className="text-center text-2xl font-bold mb-5">
          {translations[language].title as string}
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageInteraction(image.src)}
              className="cursor-pointer shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                key={index}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>
      <section
        className={`bg-white p-5 flex flex-col items-center w-full md:w-1/2 mx-auto rounded-lg shadow-lg ${isTextBoxVisible ? "visible-text-box" : "hidden-text-box"}`}
      >
        <p className="text-center text-lg text-gray-800">
          {translations[language].description as string}
        </p>
      </section>
    </div>
  );
}
