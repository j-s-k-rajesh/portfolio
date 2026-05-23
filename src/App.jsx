import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Resumetimeline from "./components/Resumetimeline"
import Skills from "./components/Skills"
import Contact from "./components/contact"

function App() {
  return (
    <div className="bg-[#131313] min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
      </main>
      <Resumetimeline />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App