const formatDateAsNatural = require('./formatDateAsNatural');

function createJsonResponse(date) {
  return {
    natural: formatDateAsNatural(date),
    unix: date.getTime() / 1000
  }
};

module.exports = createJsonResponse;
