import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const BlogIndexPage = (props) => {
  const data = props.data
  const count = data.allMarkdownRemark.edges.length
  const NextPage = (props) => {
    return (
      <a className="pageNav next" href={`/page/${(props.context.currentPage+1)}`}>次のページ</a>
    )
  }
  const PreviousPage = (props) => {
    const href = props.context.currentPage == 2 ? '/' : `/page/${(props.context.currentPage - 1)}`
    return (
      <a className="pageNav" href={href}>前のページ</a>
    )
  }
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0 has-background-black"
        style={{
          // backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1 header-title"
        >
          newnakashimaのblog
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="pagerNavButtons">
              { props.pageContext.currentPage > 1 &&
                <PreviousPage context={props.pageContext} />
              }
              { props.pageContext.numPages > props.pageContext.currentPage &&
                <NextPage context={props.pageContext} />
              }
            </div>
            <BlogRoll data={data} count={count}/>
            <div className="pagerNavButtons">
              { props.pageContext.currentPage > 1 &&
                <PreviousPage context={props.pageContext} />
              }
              { props.pageContext.numPages > props.pageContext.currentPage &&
                <NextPage context={props.pageContext} />
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndexPage

export const query = graphql`
  query BlogRollQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 120, truncate: true)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
