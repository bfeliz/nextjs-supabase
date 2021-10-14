// setup contenful client for easy use throughout application
import { createClient } from 'contentful';

module.exports = () => {
  return createClient({
    // variables generated in contentful
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
