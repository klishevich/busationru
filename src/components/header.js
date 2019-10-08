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

import { useStyles } from "./headerStyles";

export default function Header(props) {
  const { title } = props;
  const classes = useStyles();

  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openLanguageDropdown = event => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const closeLanguageDropdown = () => {
    setLanguageAnchorEl(null);
  };

  const changeLanguage = path => () => {
    setLanguageAnchorEl(null);
    navigate(path, { replace: true });
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openPageSection = sectionId => () => {
    setDrawerOpen(false);
    if (props.languageEn) {
      navigate(`/en/#${sectionId}`, { replace: true });
    } else {
      navigate(`/#${sectionId}`, { replace: true });
    }
  };

  const currentLanguage = props.languageEn ? "ENGLISH" : "РУССКИЙ";

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            aria-label="Change language"
            onClick={openLanguageDropdown}
          >
            <LanguageIcon />
            <span className={classes.currentLanguage}>{currentLanguage}</span>
            <ArrowDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={languageAnchorEl}
            keepMounted
            open={Boolean(languageAnchorEl)}
            onClose={closeLanguageDropdown}
          >
            <MenuItem
              onClick={changeLanguage("/en")}
              selected={props.languageEn}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={changeLanguage("/")}
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
        onClose={closeDrawer}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" className={classes.drawerHeaderTitle}>
            {title}
          </Typography>
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {props.drawerMenuItems.map(el => {
            const Icon = el.iconComponent;
            return (
              <ListItem key={el.id} button onClick={openPageSection(el.id)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={el.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  languageEn: PropTypes.bool,
  drawerMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      iconComponent: PropTypes.object
    })
  )
};

Header.defaultProps = {
  title: "",
  languageEn: false,
  drawerMenuItems: []
};
