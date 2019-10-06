import React from "react";

import { useStyles } from "./footerStyles";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()}, Built with&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>,&nbsp;
      <a href="https://reactjs.org/">React</a>,&nbsp;
      <a href="https://material-ui.com">Material-UI</a>
    </footer>
  );
}
