import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Drive from './pages/Drive'
import Donate from './pages/Donate'
import Domain from './pages/Domain'
import Other from './pages/Other'
import Journey from "./pages/Journey"
import Aim from "./pages/Aim"
import EducationalKitDonation from './pages/EducationalKit'
import BloodDonation from './pages/BloodDonation'
 import TreePlantation from './pages/Plantation'
import ClothDonationSection from './pages/ClothDonation'
import ChildEdu from './pages/ChildEdu'
import Orphanage from './pages/Orphanage'
import TeamAlumni from './pages/TeamAlumni'
import FAQComponent from './pages/Faq'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import DeveloperCredits from './pages/Developer'
function App() {
  return (
    <div className = 'w-screen min-h-screen '>
      <Navbar />
     <Routes>
   <Route path = "/" element = {<Home/>} />
   <Route path = "/about/journey" element = {<Journey/>} />
   <Route path = '/about/team-alumni' element = {<TeamAlumni/>} />
   <Route path = '/about/aim' element = {<Aim/>} />
   <Route path = "/domain" element = {<Domain/>} />
   <Route path = "/donate" element = {<Donate/>} />
   <Route path = "/child_education" element = {<ChildEdu/>} />
   <Route path = "/plantation_drives" element = {<TreePlantation/>} /> 
   <Route path = "/orphanage_visit" element = {<Orphanage/>} />
   <Route path = "/cloth_distribution" element = {<ClothDonationSection/>} />
   <Route path = "/donate/educational-kit" element = {<EducationalKitDonation/>} />
   <Route path = "/donateblood" element = {<BloodDonation/>} />
   <Route path = "/drivelinks" element = {<Drive/>} />
   <Route path = "/others" element = {<Other/>} />
   <Route path = '/faq' element = {<FAQComponent/>} />
   <Route path = '/privacy_policy' element = {<PrivacyPolicy/>} />
   <Route path = '/developers' element = {<DeveloperCredits/>} />
   <Route path = "*" element ={<NotFound/>} />
     </Routes>
    </div>
  )
}
export default App
