const semver = require("semver");
const { name, version } = require("./package.json");

const snapshotVersion = `${semver.inc(version, "patch")}-SNAPSHOT`;

module.exports = {
  name: "walmart-web-sell",
  version: process.env.SNAPSHOT ? snapshotVersion : version,
  environment: {
    env: "development",
    debug: false,
    application: "walmart-web-sell",
    appDist: "dev",
    appMainContent: "mainContent",
  },
  configuration: {
    API_URL: "https://walmart-api-sell.herokuapp.com/api/walmart/v1/products/",
  },
};
