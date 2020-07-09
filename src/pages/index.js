import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"


const IndexPage = props => {

  return (
    <Layout>
      <SEO title="Dog Talk - אילוף כלבים והכשרת כלבי ביטחון" />
      <div className="home__container">
        
         <Header />
         <About />
         {/* <Services /> */}
         <Projects />
         <Contact />
      </div>
      
      
      {/* <Link to="/about/">Go to about</Link> */}
    </Layout>
  )
}

export default IndexPage
