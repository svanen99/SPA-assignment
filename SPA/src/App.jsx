import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Page from './components/Page'

function App() {
  const [pageToDisplay, setPageToDisplay] = useState(null);

  return (
    <>
      {!["Why?", "When?", "Who?"].includes(pageToDisplay) && <Header />}
      <Navigation setPageToDisplay={setPageToDisplay} />
      {!pageToDisplay && <Home />}
      {pageToDisplay === "Why?" && <Page subTitle="Why?" description="Why not?" />}
      {pageToDisplay === "When?" && <Page subTitle="When?" description="NOW! HURRY!" />}
      {pageToDisplay === "Who?" && <Page subTitle="Who?" description="Me, ofcourse" />}
      <Footer />
    </>
  )
}

export default App
