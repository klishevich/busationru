import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80,
    maxWidth: 960,
    padding: `0px 1.0875rem 1rem`
  },
  anchor: {
    display: "block",
    position: "relative",
    top: -70,
    visibility: "hidden"
  },
  contacts: {
    marginBottom: 10
  },
  dictum: {
    marginBottom: 30
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 250
  },
  href: {
    color: "inherit",
    textDecoration: "inherit"
  },
  unstyled: {
    marginLeft: 0,
    "& li": {
      listStyleType: "none"
    }
  }
}));
