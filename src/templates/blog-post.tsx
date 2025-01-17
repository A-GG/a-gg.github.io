import React, { useState } from "react"
import { useSelector } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TOC from "../components/toc"
import { useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import Giscus from "@giscus/react"
import mediumZoom from "medium-zoom"

const BlogPostTemplate = ({ data, pageContext, children }) => {
  const post = data.mdx
  const {
    title: siteTitle,
    postCopyright,
    author,
    siteUrl,
  } = data.site.siteMetadata
  const { previous, next } = pageContext
  const isDarkmode = useSelector(state => state.isDarkMode)
  useEffect(() => {
    mediumZoom(".post-content img", { background: "#292a2d" })
  }, [])
  return (
    <Layout
      isFocus={false}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <div className="container">
        <article className="post-wrap">
          {/* <a href="/posts" className="goback-posts"><i className={`iconfont icon-blog`}></i></a> */}
          <header className="post-header">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <div className="post-meta">
              {/* Author: */}
              {/* <a itemProp="author" rel="author" href="/"> */}
              {/* {data.site.siteMetadata.author.name} */}
              {/* </a> */}
              {/* &nbsp; / &nbsp; */}
              <span className="post-time">
                {/* Date: */}
                {/* <a href="#/"> */}
                {post.frontmatter.date}
                {/* </a> */}
              </span>
              &nbsp;
              {/* {post.frontmatter.categories.length !== 0 && (
                <span className="post-category">
                  Category:
                  {post.frontmatter.categories.map(item => {
                    return (
                      <a key={item} href={`/category/${item}`}>
                        {item}
                      </a>
                    )
                  })}
                </span>
              )} */}
            </div>
          </header>

          <div className="post-content">
            <MDXProvider>{children}</MDXProvider>
          </div>

          {postCopyright && (
            <section className="post-copyright">
              <p className="copyright-item">
                <span>Author:&nbsp;</span>
                <span>{author.name}</span>
              </p>

              <p className="copyright-item">
                <span>Permalink:</span>
                <span>
                  <a href={siteUrl + post.fields.slug}>
                    {" "}
                    {siteUrl + post.fields.slug}{" "}
                  </a>
                </span>
              </p>

              <p className="copyright-item">
                <span>License:&nbsp;</span>
                <span>
                  <a href="http://creativecommons.org/licenses/by-nc/4.0/">
                    CC-BY-NC-4.0
                  </a>
                </span>
              </p>
            </section>
          )}

          <section className="post-tags">
            <div>
              <span>Tag(s):</span>
              <span className="tag">
                {post.frontmatter.tags.length !== 0 &&
                  post.frontmatter.tags.map(item => {
                    return (
                      <a key={item} href={`/tag/${item}`}>
                        #{item}
                      </a>
                    )
                  })}
              </span>
            </div>
            <div>
              <a
                href="#/"
                onClick={() => {
                  window.history.back()
                }}
              >
                back
              </a>
              <span> · </span>
              <a href={data.site.siteMetadata.siteUrl}>home</a>
            </div>
          </section>
          <section className="post-nav">
            {previous ? (
              <a className="prev" rel="prev" href={previous.fields.slug}>
                {previous.frontmatter.title}
              </a>
            ) : (
              <span className="prev">No More</span>
            )}
            {next ? (
              <a className="next" rel="next" href={next.fields.slug}>
                {next.frontmatter.title}
              </a>
            ) : (
              <span className="next">No More</span>
            )}
          </section>
          <Giscus
            id="comment"
            repo="w1zd/w1zd.github.io"
            repoId="MDEwOlJlcG9zaXRvcnkyODg3MTA5NjA="
            category="Announcements"
            categoryId="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDE1OTcy"
            mapping="og:title"
            theme={`https://wizd.dev/giscus-themes/${
              isDarkmode ? "dark" : "light"
            }.css`}
            reactionsEnabled="1"
            loading="lazy"
          />

          {post.frontmatter.toc && <TOC></TOC>}
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        postCopyright
        siteUrl
        author {
          name
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        tags
        toc
      }
    }
  }
`
