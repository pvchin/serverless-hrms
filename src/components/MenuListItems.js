import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import TimerIcon from "@material-ui/icons/Timer";
import SettingsIcon from "@material-ui/icons/Settings";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const MenuListItems = () => {
  const classes = useStyles();
  const [openPay, setOpenPay] = useState(false);
  const [openTable, setOpenTable] = useState(false);

  const handleClickPay = () => {
    setOpenPay(!openPay);
  };

  const handleClickTable = () => {
    setOpenTable(!openTable);
  };

  return (
    <div>
      <ListSubheader inset className={classes.mainHeader}>
        Main
      </ListSubheader>

      <Link to="/">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className={classes.item} />
        </ListItem>
      </Link>

      <Link to="/allemployees">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="All Employees" className={classes.item} />
        </ListItem>
      </Link>

      <Link to="/leave">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Leave" className={classes.item} />
        </ListItem>
      </Link>
      <Link to="/payslip">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Payslip" className={classes.item} />
        </ListItem>
      </Link>

      {/* <ListItem button onClick={handleClickPay}>
        <ListItemIcon className={classes.itemIcon}>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Payroll" className={classes.item} />
        {openPay ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openPay} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/payroll">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Payroll Run" className={classes.item} />
            </ListItem>
          </Link>

          <Link to="/payslip">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Payslip" className={classes.item} />
            </ListItem>
          </Link>
        </List>
      </Collapse> */}

      <Link to="/expenses">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Expenses" className={classes.item} />
        </ListItem>
      </Link>

      <Link to="/dailyallowances">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Daily Allowances" className={classes.item} />
        </ListItem>
      </Link>
      <Link to="/tables">
        <ListItem button>
          <ListItemIcon className={classes.itemIcon}>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" className={classes.item} />
        </ListItem>
      </Link>

      {/* <ListItem button onClick={handleClickTable}>
        <ListItemIcon className={classes.itemIcon}>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" className={classes.item} />
        {openTable ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTable} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/clients">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Clients" className={classes.item} />
            </ListItem>
          </Link>

          <Link to="/departments">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Departments" className={classes.item} />
            </ListItem>
          </Link>

          <Link to="/designation">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Designation" className={classes.item} />
            </ListItem>
          </Link>

          <Link to="/allowances">
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Allowances" className={classes.item} />
            </ListItem>
          </Link>
        </List>
      </Collapse> */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    fontSize: 24,
    color: "blue",
  },
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.blue,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "blue",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
    color: "blue",
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

export default MenuListItems;
