export const employees_url = "/api/employees";
export const leaves_url = "/api/leaves";
export const expenses_url = "/api/expenses";
export const dailyallowances_url = "/api/dailyallowances";
export const periods_url = "/api/periods";
export const payslips_url = "/api/payslips";
export const allowances_url = "/api/allowances";
export const deductions_url = "/api/deductions";
export const departments_url = "/api/departments";
export const designations_url = "/api/designations";
export const payslipearnings_url = "/api/payslipearnings";
export const payslipdeductions_url = "/api/payslipdeductions";
export const family_url = "/api/family";
export const educations_url = "/api/educations";
export const experiences_url = "/api/experiences";
export const payroll_endmonth_day = "25";

export const headEmployeesTableCells = [
  {
    name: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    name: "icno",
    numeric: false,
    disablePadding: true,
    label: "I/C No",
  },
  {
    name: "gender",
    numeric: false,
    disablePadding: true,
    label: "Gender",
  },
  { name: "age", numeric: false, disablePadding: true, label: "Age" },
  {
    name: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
];

export const headLeaveTableCells = [
  {
    name: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    name: "from_date",
    numeric: false,
    disablePadding: true,
    label: "From Date",
  },
  { name: "to_date", numeric: false, disablePadding: true, label: "To Date" },
  {
    name: "no_of_days",
    numeric: false,
    disablePadding: true,
    label: "No of Days",
  },
  {
    name: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
];

export const headExpenseTableCells = [
  {
    name: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    name: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    name: "purchased_date",
    numeric: false,
    disablePadding: true,
    label: "Purchase Date",
  },
  {
    name: "amount",
    numeric: false,
    disablePadding: true,
    label: "Amount",
  },
  {
    name: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
];

export const headDailyAllowanceTableCells = [
  {
    name: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    name: "period",
    numeric: false,
    disablePadding: true,
    label: "Period",
  },
  {
    name: "location",
    numeric: false,
    disablePadding: true,
    label: "Location",
  },
  {
    name: "amount",
    numeric: false,
    disablePadding: true,
    label: "Amount",
  },
  {
    name: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
];

//payslip
export const headPayslipTableCells = [
  {
    name: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    name: "period",
    numeric: false,
    disablePadding: true,
    label: "Period",
  },
  { name: "date", numeric: false, disablePadding: true, label: "Date" },
  {
    name: "amount",
    numeric: false,
    disablePadding: true,
    label: "Amount",
  },
  {
    name: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
];

export const periods = [
  { name: "2021-01", monthenddate: "2021-01-25" },
  { name: "2021-02", monthenddate: "2021-02-25" },
  { name: "2021-03", monthenddate: "2021-03-25" },
  { name: "2021-04", monthenddate: "2021-04-25" },
  { name: "2021-05", monthenddate: "2021-05-25" },
  { name: "2021-06", monthenddate: "2021-06-25" },
  { name: "2021-07", monthenddate: "2021-07-25" },
  { name: "2021-08", monthenddate: "2021-08-25" },
  { name: "2021-09", monthenddate: "2021-09-25" },
  { name: "2021-10", monthenddate: "2021-10-25" },
  { name: "2021-11", monthenddate: "2021-11-25" },
  { name: "2021-12", monthenddate: "2021-12-25" },
];
