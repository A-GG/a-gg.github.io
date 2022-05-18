import React from "react"
import { useState, useEffect } from "react"
// import { useFlexSearch } from 'react-use-flexsearch'
import { useStaticQuery, graphql, Link } from "gatsby"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          nav {
            name
            url
          }
        }
      }
    }
  `)
  const [isMenuActive, setisMenuActive] = useState(false)
  // const [query, setQuery] = useState('')
  const { nav, siteUrl, title } = data.site.siteMetadata
  // const { publicStoreURL, publicIndexURL,index, store } = data.localSearchPages
  // const results = useFlexSearch(query, index, store);
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header header-logo">
            <a href="/">{title}</a>
          </div>
          <div className="menu navbar-right">
            {nav.map(item => (
              <a className="menu-item" href={item.url} key={item.name}>
                {item.name}
              </a>
            ))}
            {/* <div className='menu-item search'>
              <div className='search-form'>
                <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/>
                <div className='search-icon'></div>
              </div>
              {
                results.length > 0 && 
                <div className='search-result'>{results.map(v => <Link key={v.id} to={`${siteUrl}/${v.slug}`}>{v.title}</Link>)}</div>
              }
            </div> */}
          </div>
        </div>
      </nav>
      <nav className="navbar-mobile" id="nav-mobile">
        <div className="container">
          <div className="navbar-header">
            <div>
              <a href="/">{title}</a>
            </div>
            <div className={`menu-toggle ${isMenuActive? "active": ""}`} onClick={() => {setisMenuActive(!isMenuActive)}}>&#9776; Menu</div>
          </div>
          <div className={`menu ${isMenuActive? "active": ""}`}>
            {nav.map(item => (
              <a className="menu-item" href={item.url} key={item.name}>
                {item.name}
              </a>
            ))}
            {/* <a className='menu-item search-btn'></a> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
