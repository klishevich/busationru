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
import ContentRu from "../components/contentRu";
import Footer from "../components/footer";

const menuItems = [
  { id: "services", name: "Услуги", iconComponent: FormatPaintIcon },
  { id: "team", name: "Команда", iconComponent: SportsKabaddiIcon },
  { id: "values", name: "Ценности", iconComponent: InsertEmoticonIcon },
  { id: "portfolio", name: "Портфолио", iconComponent: WorkIcon },
  { id: "contacts", name: "Контакты", iconComponent: CallIcon }
];

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
      <SEO title="Разработка React и Node.js в Москве" description="Компания Бизнес-Оптимизация предлагает услуги React, Node.js, мобильная разработка iOS, Android, DevOps, анализ данных и машинное обучение в Москве" />
      <Header title={title} drawerMenuItems={menuItems} />
      <ContentRu title={title} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
