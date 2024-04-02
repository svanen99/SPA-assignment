import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PickContainer from './components/PickContainer'
import Pink from './components/Pink'
import Green from './components/Green'
import Orange from './components/Orange'
import Yellow from './components/Yellow'
import Blue from './components/Blue'

function App() {
  const [pageToDisplay, setPageToDisplay] = useState();
  return (
    <>
      <Header />
      <PageTitle />
      <Navigation setPageToDisplay={setPageToDisplay} />
      {!pageToDisplay && <PickContainer updateFunction={setPageToDisplay} />}
      { pageToDisplay === "Pink" && <Pink updateFunction={setPageToDisplay} />}
      { pageToDisplay === "Green" && <Green updateFunction={setPageToDisplay} />}
      { pageToDisplay === "Orange" && <Orange updateFunction={setPageToDisplay} />}
      { pageToDisplay === "Yellow" && <Yellow updateFunction={setPageToDisplay} />}
      { pageToDisplay === "Blue" && <Blue updateFunction={setPageToDisplay} />}
      
      {/* <Footer /> */}
    </>
  )
}


export default App