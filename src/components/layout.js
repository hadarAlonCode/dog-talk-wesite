/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState , useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
import NavBar from "./NavBar"
import {site_text} from "../text/text"
import { myContext } from '../provider';
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <>
    <div className="app__container">
     <myContext.Consumer>
      {context => (
        <React.Fragment>
          <NavBar text={site_text['navbar']}  />     
          <main >{children}</main>
          <Footer />
          

      </React.Fragment>
      )}
      </myContext.Consumer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
