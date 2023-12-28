'use client'

import Head from 'next/head'
import { useState } from 'react'

const summary = `Gia Jung is a computational designer and software engineer based in New York City.
 She likes to eat food and floss her teeth. She also likes hula hooping and playing with other people's dogs.
 She makes things on computers that look good and work well.
 Gia is friendly, likes to share, and helps make the Earth a happier place with her designs.`

export default function Home() {

    const [selectedCategory, setSelectedCategory]: [string | undefined, Function] = useState();

  return (
    <div className="bg-white">
      <Head>
        <title>Learn About Gia</title>
      </Head>
      
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-gray-800">Generative Gia</h1>

        <div className="my-8 w-full md:w-2/3 lg:w-1/2 h-64 bg-gray-100 border-dashed border-2 border-gray-300">
            {selectedCategory === 'summary' && <p className="p-4 text-gray-800">{summary}</p>}
        </div>

        <h2 className="text-xl mb-4 font-semibold text-gray-800">
          ✨ What would you like to learn about Gia?
        </h2>

        <div className="grid grid-cols-4 gap-4 w-full md:w-3/4 lg:w-1/2">
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Land Use Pattern</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Site Context</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Built Form</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Street Layout</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none ">Sustainability Impact</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Financial Analysis</button>
          <button disabled className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300 cursor-not-allowed opacity-50 pointer-events-none">Environmental Quality</button>
          <button className="rounded-lg bg-blue-200 p-4 text-gray-700 font-medium hover:bg-blue-300"
            onClick={() => setSelectedCategory('summary')}>Overall Summary</button>
        </div>
      </main>
    </div>
  )
}
