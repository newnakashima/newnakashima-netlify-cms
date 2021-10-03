import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import '../templates/blog.sass'

function BlogRoll (props) {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      if (/.*…$/.test(block.innerText)) {
        block.parentElement.replaceWith('…');
        return;
      }
      hljs.highlightBlock(block);
      block.innerHTML = createLineNumbers(block);
    })
  })

  const createLineNumbers = block => {
    const lines = block.innerHTML.split("\n");
    const digits = Math.floor(Math.log10(lines.length)) + 1;
    return lines.map((line, i) => {
      return `<span class="line-number">${line}</span>`;
    }).slice(0, -1).join("\n");
  }

  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-full" key={post.id}>
            <article
              className={`blog-list-item is-child ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {/* {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null} */}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <div>
                <div
                  dangerouslySetInnerHTML={{__html: post.excerpt}}
                />
                {/* {post.excerpt} */}
                <Link className="button" to={post.fields.slug}>
                  {`続き =>`}
                </Link>
              </div>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll
