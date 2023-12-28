const currentYear = new Date().getFullYear()

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-10 text-gray-800">
      <h1 className="text-4xl mb-2 font-bold">
        <a href="https://www.linkedin.com/in/giajung/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          Gia Jung
        </a>
      </h1>
      <p className="text-lg">
        <a href="mailto:hi@giajung.com" className="hover:text-gray-600">
          hi@giajung.com
        </a>
      </p>
      <footer className="absolute bottom-4">
        <p className="text-sm">
          {`© ${currentYear} Gia Jung`}
        </p>
      </footer>
    </main>
  )
}
