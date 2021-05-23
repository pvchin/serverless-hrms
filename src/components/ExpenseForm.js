import React, { useState, useReducer, useEffect } from "react";
import {
  Button,
  Icon,
  TextField,
  Paper,
  Typography,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { useEmployeesContext } from "../context/employees_context";
import { useExpensesContext } from "../context/expenses_context";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const initial_values = {
  name: "",
  date: "",
  purchased_date: "",
  purchased_from: "",
  description: "",
  remark: "",
  status: "Pending",
  amount: 0,
};

const ExpenseForm = () => {
  let history = useHistory();
  const classes = useStyles();
  const {
    isExpenseEditing,
    single_expense,
    updateExpense,
    addExpense,
    editExpenseID,
    loadExpenses,
    single_expense_loading,
  } = useExpensesContext();
  const { loadEmployees, employees } = useEmployeesContext();
  const {
    name,
    date,
    purchased_date,
    purchased_from,
    description,
    remark,
    status,
    amount,
  } = single_expense || initial_values;
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    loadEmployees();
  }, []);

  const onSubmit = (data) => {
    if (isExpenseEditing) {
      updateExpense({ id: editExpenseID, ...data });
    } else {
      addExpense({ ...data });
    }
    loadExpenses();
    history.push("/expenses");
  };

  if (single_expense_loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          EXPENSES CLAIM FORM
        </Typography>
        <Typography component="p">Expense Claim Application</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="name"
              control={control}
              defaultValue={name}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Name"
                    id="margin-normal"
                    name="name"
                    defaultValue={name}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    select
                  >
                    {employees.map((e) => {
                      return (
                        <MenuItem key={e.name} value={e.name}>
                          {e.name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                );
              }}
              rules={{ required: "Name required" }}
            />
          </div>
          <div>
            <Controller
              name="date"
              control={control}
              defaultValue={date}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Date"
                    type="date"
                    id="margin-normal"
                    name="date"
                    defaultValue={date}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                );
              }}
              rules={{ required: "From Date is required" }}
            />
          </div>
          <div>
            <Controller
              name="purchased_date"
              control={control}
              defaultValue={purchased_date}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Purchased Date"
                    id="margin-normal"
                    type="date"
                    name="purchased_date"
                    defaultValue={purchased_date}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                );
              }}
              rules={{ required: "Purchased Date is required" }}
            />
          </div>
          <div>
            <Controller
              name="purchased_from"
              control={control}
              defaultValue={purchased_from}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Purchased From"
                    id="margin-normal"
                    name="purchased_from"
                    defaultValue={purchased_from}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              // rules={{ required: "Reason is required" }}
            />
          </div>
          <div>
            <Controller
              name="description"
              control={control}
              defaultValue={description}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Description"
                    id="margin-normal"
                    name="description"
                    defaultValue={description}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              // rules={{ required: "Reason is required" }}
            />
          </div>
          <div>
            <Controller
              name="amount"
              control={control}
              defaultValue={amount}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Amount"
                    type="number"
                    id="standard-number"
                    name="amount"
                    defaultValue={amount}
                    className={classes.textField}
                    //onChange={onChange}
                    onChange={(e) => {
                      onChange(parseInt(e.target.value, 10));
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              //rules={{ required: "IC No required" }}
            />
          </div>
          <div>
            <Controller
              name="remark"
              control={control}
              defaultValue={remark}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Remark"
                    id="margin-normal"
                    name="remark"
                    defaultValue={remark}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              // rules={{ required: "Reason is required" }}
            />
          </div>
          <div>
            <Controller
              name="status"
              control={control}
              defaultValue="Pending"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label="Status"
                    id="margin-normal"
                    name="status"
                    defaultValue={status}
                    className={classes.textField}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    select
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Cancel">Cancel</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </TextField>
                );
              }}
              //rules={{ required: "Status is required" }}
            />
          </div>

          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
        </form>
      </Paper>
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
}));

export default ExpenseForm;
