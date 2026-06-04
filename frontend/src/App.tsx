import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar'
import UpdatesSection from './components/updates/UpdatesSection'

function App() {
 

  return (
    <>
    <div className="bg-[#F8FAFC]">
      <Navbar/>
      <Hero/>
      <UpdatesSection/>
    </div>    
    </>
  )
}

export default App
