import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar'
function MyApp({ Component, pageProps }) {
  return (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ from PES University
          </a>
    </footer>
  </div>
  )
}

export default MyApp
