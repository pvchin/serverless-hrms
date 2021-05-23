const { table } = require("./airtable-dailyallowances");
const formattedReturn = require("../formattedReturn");

module.exports = async (event) => {
  const { id, fv } = event.queryStringParameters;
  // const { id, filterValue, filterField } = event.queryStringParameters;
  // console.log(filterValue, filterField);

  if (id) {
    const dailyallowances = await table.find(id);
    const formattedDailyAllowances = {
      id: dailyallowances.id,
      ...dailyallowances.fields,
    };
    if (dailyallowances.error) {
      return {
        statusCode: 404,
        body: `No Daily Allowances with id: ${id}`,
      };
    }

    return formattedReturn(200, formattedDailyAllowances);
  }
  if (fv) {
    const dailyallowances = await table
      .select({ filterByFormula: `empid = '${fv}'` })
      .firstPage();
    const formattedDailyAllowances = dailyallowances.map((dailyallowance) => ({
      id: dailyallowance.id,
      ...dailyallowance.fields,
    }));

    return formattedReturn(200, formattedDailyAllowances);
  }

  try {
    const dailyallowances = await table.select().firstPage();
    const formattedDailyAllowances = dailyallowances.map((dailyallowance) => ({
      id: dailyallowance.id,
      ...dailyallowance.fields,
    }));

    return formattedReturn(200, formattedDailyAllowances);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
