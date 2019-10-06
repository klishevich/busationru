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
  }
}));
