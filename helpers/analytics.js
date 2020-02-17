var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.SEGEMENT_ANALYTICS_KEY, { flushAt: 1 });

module.export = analytics;