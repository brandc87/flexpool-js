const fetch = require('isomorphic-unfetch');

class Flexpool {
  constructor() {
    this.basePath = 'https://flexpool.io/api/v1';
  }

  request(endpoint = '', options = {}) {
    const url = this.basePath + endpoint;

    const headers = {
      'Content-type': 'application/json',
    };

    const config = {
      ...options,
      ...headers,
    };

    return fetch(url, config).then((result) => {
      if (result.ok) {
        return result.json();
      }

      throw new Error(result);
    });
  }

  getPoolHashrate() {
    const url = '/pool/hashrate';
    return this.request(url, {});
  }

  getPoolHashrateChart() {
    const url = '/pool/hashrateChart';
    return this.request(url, {});
  }

  getMinersOnline() {
    const url = '/pool/minersOnline';
    return this.request(url, {});
  }

  getWorkersOnline() {
    const url = '/pool/workersOnline';
    return this.request(url, {});
  }
}

module.exports = Flexpool;
