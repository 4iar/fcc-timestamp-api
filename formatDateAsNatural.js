const strftime = require('strftime')


function formatDateAsNatural(date) {
  return strftime("%B %d, %Y", date);
}

module.exports = formatDateAsNatural;
