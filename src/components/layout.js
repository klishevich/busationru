/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";

import { useStyles, theme } from "./layoutStyles";

import "./layout.css";

const Layout = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
