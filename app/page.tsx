'use client'

import { useState } from 'react'

const mapLanguage = (language: string) => {
  if (language.toLowerCase().includes('en')) return 'EN';
  if (language.toLowerCase().includes('kr')) return '中文';
  return language;
}

export default function Index() {

  const t: {[key: string]: {[key: string]: string|string[]}} = {
    'EN': {
      'name': 'Gia Jung',
      'question': 'In what context do you know Gia?',
      'email': 'hi',
      categories: [
        'Family',
        'Romantic',
        'Friend',
        'I Don\'t',
        'Other',
        'Professional',
      ].sort(),
    },
    '中文': {
      'name': '정지아',
      'question': '지아를 어떤 상황에서 알고 계신가요?',
      'email': '안녕하세요',
      categories: [
        '가족',
        '연인',
        '친구',
        '모르시겠어요',
        '기타',
        '직장',
      ].sort(),
    }
  };

  const [clicked, setClicked]: [boolean, Function] = useState(false);

  const preferredLanguage = mapLanguage(window.localStorage.getItem('language') || window.navigator.language);
  const [l, setLanguage]: [string, Function] = useState(preferredLanguage || 'EN');

  const handleSetLanguage = (language: string) => {
    setLanguage(language);
    window.localStorage.setItem('language', language);
  }

  const setCategory = (category: string) => {
    window.sessionStorage.setItem('category', category);
    window.location.href = `/about`;
  }

  return (
    <div className="bg-white p-10 text-gray-800">
    <div className="float-right">
      <button className={`hover:text-gray-600 ${l === 'EN' ? 'font-bold' : ''}`} onClick={() => handleSetLanguage('EN')}>EN</button>
      |
      <button className={`hover:text-gray-600 ${l === '中文' ? 'font-bold' : ''}`} onClick={() => handleSetLanguage('中文')}>中文</button>
    </div>
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-10 text-gray-800">
      { !clicked ? (<h1 className="text-4xl mb-2 font-bold">
        <button className="hover:text-gray-600" onClick={() => setClicked(!clicked)}>
          {t[l].name}
        </button>
      </h1>) : (
        <>
      <p className="text-3xl mb-2 font-bold">{t[l].question}</p>
      <select
        className="w-full md:w-1/2 lg:w-1/3 h-12 mt-4 mb-8 px-4 py-2 border-2 border-gray-300 rounded-lg"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled selected>Select</option>
        {(t[l].categories as string[]).map((category: string) => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select></>)}
      <p className="text-lg">
        <a href="mailto:hi@giajung.com" className="hover:text-gray-600">
          {t[l].email}@giajung.com
        </a>
      </p>
      <footer className="absolute bottom-4">
        <p className="text-sm">
          {`© ${new Date().getFullYear()} `}
          <a href="https://www.linkedin.com/in/giajung/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">{t[l].name}</a>
        </p>
      </footer>
    </main>
    </div>
  )
}