const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Portofolio_V5-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

