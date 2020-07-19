import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    const data = this.props.data
    const count = data.allMarkdownRemark.edges.length
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
              <BlogRoll data={data} count={count}/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

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