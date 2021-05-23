import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import { useDailyAllowancesContext } from "../context/dailyallowances_context";
import { periods } from "../utils/constants";
import DailyAllowancesTable from "./DailyAllowancesTable";
import { headDailyAllowanceTableCells } from "../utils/constants";

const DailyAllowancesPeriods = () => {
  let history = useHistory();
  const classes = useStyles();
  const { setDailyAllowancePeriod } = useDailyAllowancesContext();

  const handlePeriod = (name) => {
    setDailyAllowancePeriod(name);
    history.push("/batchdailyallowances");
  };

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <h2>Payroll Period</h2>
        </Typography>
      </Toolbar>
      <Grid container spacing={3}>
        {periods.map((e) => {
          return (
            <Grid item xs={3} inline>
              <Paper className={classes.paper}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={() => handlePeriod(e.name)}
                >
                  {e.name}
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    flex: "1 1 100%",
    textAlign: "center",
  },
}));
export default DailyAllowancesPeriods;
