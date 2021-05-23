import React from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  Select,
  Divider,
  Grid,
  Toolbar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";

import { useTablesContext } from "../context/tables_context";
import UpdateAllowances from "./UpdateAllowances";
import UpdateDeductions from "./UpdateDeductions";
import UpdateDepartments from "./UpdateDepartments";
import UpdateDesignations from "./UpdateDesignations";

const TablesUpdate = () => {
  let history = useHistory();
  const classes = useStyles();
  const { allowances, load_allowances } = useTablesContext();
  return (
    <div>
      <Grid container alignItems="center" className={classes.grid}>
        <Grid xs={12}>
          <h2>Tables Maintenance</h2>
        </Grid>

        <Grid xs={12}>
          <UpdateAllowances />
        </Grid>
        <Divider />

        <Grid xs={12}>
          <UpdateDeductions />
        </Grid>
        <Grid xs={12}>
          <UpdateDepartments />
        </Grid>
        <Grid xs={12}>
          <UpdateDesignations />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  grid: {
    padding: theme.spacing(3, 2),
    // justifyContent: "center",
  },
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8,
  },
}));

export default TablesUpdate;
