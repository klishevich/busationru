import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageEnQuery {
      site {
        siteMetadata {
          en {
            title
          }
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata.en;

  return (
    <Layout>
      <SEO title="Page two" />
      <Header siteTitle={title} />
      <div
        style={{
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 30
        }}
      >
        <h1>{title}</h1>
        <p>Welcome to page EN</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};

export default SecondPage;
