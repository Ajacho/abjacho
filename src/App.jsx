import { NavBar } from './components/NavBar'
import { Home } from './components/sections/Home'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <main className='flex-grow'>
        <Home />
        <Experience />
        <Projects />
      </main>
      <Footer/>
    </div>
    
  )
}

export default App
