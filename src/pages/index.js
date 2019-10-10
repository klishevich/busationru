import React from "react";
import { menuItemsRu } from "../constants/menuItems";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import ContentRu from "../components/contentRu";
import Footer from "../components/footer";
import { SITE_TITLE_RU } from "../constants/siteMetadata";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Разработка React и Node.js в Москве"
        description="Компания Бизнес-Оптимизация предлагает услуги React, Node.js, мобильная разработка iOS, Android, DevOps, анализ данных и машинное обучение в Москве"
      />
      <Header title={SITE_TITLE_RU} drawerMenuItems={menuItemsRu} />
      <ContentRu title={SITE_TITLE_RU} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
