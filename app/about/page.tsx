"use client";

import { useState } from "react";
import LanguageSelector from "../languageSelector";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  const [language, setLanguage] = useState("EN");

  const translations: { [key: string]: { [key: string]: string[] | string } } =
    {
      EN: {
        about: [
          `I am a Computational Designer at Google, deeply engaged in integrating AI and ML into architectural and urban design. My career has been built on a solid foundation of both theory and practice in computational design, which is central to my professional identity.`,
          `Originally from Seoul, South Korea, my academic journey led me to Harvard University, where I earned an M.Arch. I joined Harvard Faculty as an adjunct professor, where I explored computational geometry and made significant contributions to the evolving field.`,
          `In my professional life, I've had influential roles at Spacemaker AI (now part of Autodesk) and Spatio Metrics. These experiences have sharpened my skills in applying computational tools to address real-world architectural and urban planning challenges.`,
          `Currently, at Google, my work revolves around Large Language Models and enhancing user interactions on Google Earth. This aligns with my passion for sustainable urban development, utilizing computational tools for effective policymaking and innovative urban design.`,
          `I am always open to collaborations that focus on sustainable urban design solutions. If you share this interest and passion, I welcome the opportunity to connect and explore how we can contribute together to this vital field.`,
        ],
        name: "Gia Jung",
        title: "About Me",
      },
      한글: {
        about: [
          `저는 구글에서 컴퓨테이셔널 디자이너로 일하고 있으며, 건축 및 도시 디자인에 AI와 ML을 통합하는 데 깊이 몰두하고 있습니다. 이론과 실무를 겸비한 컴퓨테이셔널 디자인 분야에서 제 경력이 구축되었으며, 이는 제 전문적 정체성의 핵심입니다.`,
          `한국 서울 출신으로, 제 학문적 여정은 하버드 대학교에서 M.Arch 학위를 취득하며 시작되었습니다. 여기서 저는 조교로서 컴퓨테이셔널 기하학을 탐구하며 이 발전하는 분야에 중요한 기여를 했습니다.`,
          `전문적인 삶에서 저는 Spacemaker AI(현재 Autodesk의 일부)와 Spatio Metrics에서 영향력 있는 역할을 맡았습니다. 이러한 경험들은 실제 건축 및 도시 계획 과제에 컴퓨테이셔널 도구를 적용하는 데 필요한 제 기술을 갈고닦는 데 도움이 되었습니다.`,
          `현재 구글에서 저는 대형 언어 모델과 Google Earth 사용자 상호작용을 개선하는 일에 주력하고 있습니다. 이는 지속 가능한 도시 개발에 대한 제 열정과 일치하며, 효과적인 정책 결정과 혁신적인 도시 디자인을 위해 컴퓨테이셔널 도구를 활용하고자 하는 제 목표와도 맞닿아 있습니다.`,
          `지속 가능한 도시 디자인 솔루션에 초점을 맞춘 협업에 항상 열려 있습니다. 이 분야에 대한 관심과 열정을 공유하신다면, 함께 기여할 수 있는 방법을 모색해보는 것에 대해 연락을 환영합니다.`,
        ],
        name: "정지아",
        title: "저에 대하여",
      },
    };

  return (
    <div className="bg-white p-10 text-gray-800">
      <Head>
        <title>Gia Jung | About Me</title>
        <meta
          name="description"
          content="Learn more about Gia Jung, a Computational Designer at Google."
        />
        <link rel="icon" type="image/png" href="/professional-panda.png" />
      </Head>
      <div className="float-left fixed top-0 left-0 p-4">
        <Link href="/">🏠 Home</Link>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <LanguageSelector onLanguageChange={setLanguage} />
        <article className="bg-white rounded-lg overflow-hidden p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {translations[language].title}
          </h1>
          {(translations[language].about as string[]).map((paragraph) => (
            <p
              key={paragraph}
              className="text-base text-gray-700 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </main>
    </div>
  );
}
