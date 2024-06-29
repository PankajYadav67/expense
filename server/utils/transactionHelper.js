const moment = require("moment");

const getMonthOfDate = (dateVal) => {
  const monthOfTransactionVal = moment(dateVal).month();
  const humanReadableFormat = monthOfTransactionVal + 1;
  return humanReadableFormat;
};

module.exports = { getMonthOfDate };
