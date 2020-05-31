import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import About from "../components/About/About"
import Services from "../components/Services/Services"


const IndexPage = props => {

  return (
    <Layout>
      <SEO title="Dog Talk - אילוף כלבים והכשרת כלבי ביטחון" />
      <div className="home__container">
        
         <Header />
         <About />
         <Services />
      </div>
      
      
      {/* <Link to="/about/">Go to about</Link> */}
    </Layout>
  )
}

export default IndexPage
