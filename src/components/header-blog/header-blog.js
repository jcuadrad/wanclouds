import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './header-blog.css'

import logo from '../../assets/Blog/LOGO-BLOG-WANCLOUDS.png'
import home from '../../assets/Blog/BLOG-PRINCIPAL_ICON-01-WANCLOUDS.png'
import news from '../../assets/Blog/BLOG-PRINCIPAL_ICON-04-WANCLOUDS.png'
import business from '../../assets/Blog/BLOG-PRINCIPAL_ICON-02-WANCLOUDS.png'
import contact from '../../assets/Blog/BLOG-PRINCIPAL_ICON-05-WANCLOUDS.png'
import custom from '../../assets/Blog/BLOG-PRINCIPAL_ICON-03-WANCLOUDS.png'

const HeaderBlog = ({ siteTitle }) => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="logo" className="logo-image"/>
    </div>
    <div className="nav">
      <Link to="/">
        <img className="nav-logo" src={home} alt="home"/>
      </Link> 
      <Link to="/#business">
        <img className="nav-logo" src={business} alt="business"/>
      </Link> 
      <Link to="/#custom">
        <img className="nav-logo" src={custom} alt="custom"/>
      </Link>
      <Link to="/blog/">
        <img className="nav-logo" src={news} alt="news"/>
      </Link>
      <AnchorLink href="#contact">
        <img className="nav-logo" src={contact} alt="contact"/>
      </AnchorLink> 
    </div>
  </div>
)

export default HeaderBlog
