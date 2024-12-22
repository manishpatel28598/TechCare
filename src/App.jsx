import { useState } from 'react'
import Navbar from './navbar/Navbar'
import './App.css'
import RightSideBar from './rightSideBar/RightSideBar'
import LeftSideBar from './leftSideBar/LeftSideBar'
import MiddleFeed from './middleFeed/MiddleFeed'


function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [diagnosisData, setDiagnosisData] = useState([]);

  return (
    <>
    <div className='w-auto min-h-screen bg-slate-100 '>
      <Navbar/>
      <div className='mx-4 mt-10 flex justify-between'>
        <LeftSideBar onSelectProfile={setSelectedProfile}/>
        <MiddleFeed profile={selectedProfile}/>
        <RightSideBar profile={selectedProfile}/>

      </div>
    </div>
    </>
  )
}

export default App


