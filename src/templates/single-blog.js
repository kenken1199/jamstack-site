import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const singleBlog = props => {
  return (
    <Layout>
      <div className={style.hero}>
        <GatsbyImage
          image={props.data.contentfulBlog.image.gatsbyImageData}
          alt="blog-image"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.data.contentfulBlog.title}</h1>
          <p>{props.data.contentfulBlog.date}</p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.data.contentfulBlog.textBody.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default singleBlog

export const query = graphql`
  query ContentfulSingleBlogQuery($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "YYYY-MM-DD")
      image {
        gatsbyImageData(
          formats: AUTO
          placeholder: BLURRED
          quality: 90
          width: 1000
        )
      }
      textBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
