import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import WorkIcon from "@material-ui/icons/Work";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CallIcon from "@material-ui/icons/Call";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Content from "../components/contentEn";
import Footer from "../components/footer";

const menuItems = [
  { id: "services", name: "Services", iconComponent: FormatPaintIcon },
  { id: "team", name: "Team", iconComponent: SportsKabaddiIcon },
  { id: "values", name: "Values", iconComponent: InsertEmoticonIcon },
  { id: "portfolio", name: "Portfolio", iconComponent: WorkIcon },
  { id: "contacts", name: "Contacts", iconComponent: CallIcon }
];

const IndexPage = () => {
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
      <SEO
        title="React and Node.js development in Moscow"
        description="Business-Optimization company provide React, Node.js, mobile, iOS, Android development, DevOps, Data Analysis and Machine Learning in Moscow"
      />
      <Header title={title} languageEn={true} drawerMenuItems={menuItems} />
      <Content title={title} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
