import './App.css'
import CoursesSection from './components/courses/CoursesSection'
import GuidanceSection from './components/guidance/GuidanceSection'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar'
import ProcessSection from './components/process/ProcessSection'
import Regions from './components/regions/RegionsSection'
import UpdatesSection from './components/updates/UpdatesSection'


function App() {
 

  return (
    <>
    <div className="bg-[#F8FAFC]">
      <Navbar/>
      <Hero/>
      <UpdatesSection/>
      <Regions/>
      <GuidanceSection/>
      <CoursesSection/>
      <ProcessSection/>
    </div>    
    </>
  )
}

export default App
