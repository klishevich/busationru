import PropTypes from "prop-types";
import React from "react";
import { navigate } from "gatsby";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import WorkIcon from "@material-ui/icons/Work";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CallIcon from "@material-ui/icons/Call";

import { useStyles } from "./headerStyles";

export default function Header(props) {
  const { siteTitle } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = path => () => {
    setAnchorEl(null);
    navigate(path, { replace: true });
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <LanguageIcon />
            <ArrowDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleMenuClick("/en")}
              selected={props.languageEn}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={handleMenuClick("/")}
              selected={!props.languageEn}
            >
              Русский
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawerClose}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" className={classes.drawerHeaderTitle}>
            {siteTitle}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <FormatPaintIcon />
            </ListItemIcon>
            <ListItemText primary="Услуги" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Портфолио" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SportsKabaddiIcon />
            </ListItemIcon>
            <ListItemText primary="Команда" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertEmoticonIcon />
            </ListItemIcon>
            <ListItemText primary="Ценности" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Контакты" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  languageEn: PropTypes.bool
};

Header.defaultProps = {
  siteTitle: "",
  languageEn: false
};
