import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

function Post({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
      <BlogPost post={post} />
    </Layout>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        description
        path
        title
      }
      htmlAst
      id
    }
  }
`;