const { table } = require("./airtable-payslips");
const formattedReturn = require("../formattedReturn");

module.exports = async (event) => {
  const { id, fv } = event.queryStringParameters;
  // const { id, filterValue, filterField } = event.queryStringParameters;
  // console.log(filterValue, filterField);

  if (id) {
    const payslip = await table.find(id);
    const formattedPayslips = { id: payslip.id, ...payslip.fields };
    if (payslip.error) {
      return {
        statusCode: 404,
        body: `No Payslip with id: ${id}`,
      };
    }

    return formattedReturn(200, formattedPayslips);
  }
  if (fv) {
    const payslips = await table
      .select({ filterByFormula: `period = '${fv}'` })
      .firstPage();
    const formattedPayslips = payslips.map((payslip) => ({
      id: payslip.id,
      ...payslip.fields,
    }));

    return formattedReturn(200, formattedPayslips);
  }

  try {
    const payslips = await table.select().firstPage();
    const formattedPayslips = payslips.map((payslip) => ({
      id: payslip.id,
      ...payslip.fields,
    }));

    return formattedReturn(200, formattedPayslips);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
