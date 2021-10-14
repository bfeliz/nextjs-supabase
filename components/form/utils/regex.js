// custom regex for validations
const regex = {
  date: /(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/,
  currency: /^\$?[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
};

export default regex;
