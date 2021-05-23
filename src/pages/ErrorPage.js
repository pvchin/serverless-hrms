import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { headExpenseTableCells } from "../utils/constants";
import ExpenseTable from "../components/ExpenseTable";

const drawerWidth = 240;

const ErrorPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <CssBaseline />
      <div className={classes.appBarSpacer}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={8} lg={9}> */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <div className="main-wrapper">
                  <Helmet>
                    <title>Error 404 - HRMS Admin Template</title>
                    <meta name="description" content="Login page" />
                  </Helmet>
                  <div className="error-box">
                    <h1>404</h1>
                    <h3>
                      <i className="fa fa-warning" /> Oops! Page not found!
                    </h3>
                    <p>The page you requested was not found.</p>
                    <a
                      onclick={() => localStorage.setItem("firstload", "true")}
                      href="/"
                      className="btn btn-custom"
                    >
                      Back to Home
                    </a>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(4),
    border: "1px solid",
  },
  paper: {
    padding: theme.spacing(2),
    // display: "flex",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    border: "1px solid",
    width: "100%",
  },
  fixedHeight: {
    // height: 240,
    height: "85vh",
  },
}));
export default ErrorPage;
