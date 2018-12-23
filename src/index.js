const curlCard = require('./lib/curl-card');

const config = {};

const card = curlCard({ config });
card.listen();
