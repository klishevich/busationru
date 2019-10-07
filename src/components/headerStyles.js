import { makeStyles } from "@material-ui/core";

const drawerWidth = 300;
const drawerWidthWide = 320;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthWide
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthWide
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerHeaderTitle: {
    flexGrow: 1,
    marginLeft: 10
  },
  currentLanguage: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      marginLeft: 4
    }
  }
}));
