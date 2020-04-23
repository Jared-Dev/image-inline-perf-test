import React from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    {props.data.allImageSharp.edges.map(({ node: { fixed } }, idx) => (
      <Img key={idx} fixed={fixed} critical={idx < 10} />
    ))}
  </Layout>
);

export const query = graphql`
query MyImages {
  allImageSharp {
    edges {
      node {
        fixed(width: 310, traceSVG: {color: "#7F187F"}) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
}
`;

export default IndexPage
