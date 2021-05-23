require("dotenv").config();
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_ID }).base(
  process.env.AIRTABLE_BASE_ID
);
const table = base(process.env.PAYSLIPDEDUCTIONS_TABLE_NAME);

module.exports = { table };
