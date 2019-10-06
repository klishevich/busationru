/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "./layout.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1976d2"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

const Layout = props => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          ru {
            title
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <footer style={{ maxWidth: 960, padding: `0px 1.0875rem 1.45rem` }}>
        © {new Date().getFullYear()}, Built with&nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>,&nbsp;
        <a href="https://reactjs.org/">React</a>,&nbsp;
        <a href="https://material-ui.com">Material-UI</a>
      </footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
