import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageRuQuery {
      site {
        siteMetadata {
          ru {
            title
          }
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata.ru;

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={title} />
      <div
        style={{
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 30
        }}
      >
        <h1>{title}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/en">Go to page EN</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
