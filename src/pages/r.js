import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import { menuItemsRu } from "../constants/menuItems";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { SITE_TITLE_RU } from "../constants/siteMetadata";
import ContentRuRekvisits from "../components/contentRuRekvisits";

export default function R() {
  return (
    <Layout>
      <SEO
        title="Ревизиты"
        description="Реквизиты компании Бизнес-Оптимизация"
      />
      <Header title={SITE_TITLE_RU} drawerMenuItems={menuItemsRu} />
      <ContentRuRekvisits />
      <Footer />
    </Layout>
  );
}
