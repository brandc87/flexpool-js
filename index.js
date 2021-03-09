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

  getMinerBalance(address) {
    const url = `/miner/${address}/balance`;
    return this.request(url, {});
  }

  getMinerCurrentStats(address) {
    const url = `/miner/${address}/current`;
    return this.request(url, {});
  }

  getMinerDailyStats(address) {
    const url = `/miner/${address}/daily`;
    return this.request(url, {});
  }

  getMinerStats(address) {
    const url = `/miner/${address}/stats`;
    return this.request(url, {});
  }

  getMinerWorkerCount(address) {
    const url = `/miner/${address}/workerCount`;
    return this.request(url, {});
  }

  getMinerWorkers(address) {
    const url = `/miner/${address}/workers`;
    return this.request(url, {});
  }

  getMinerExists(address) {
    const url = `/miner/${address}/exist`;
    return this.request(url, {});
  }

  getMinerChart(address) {
    const url = `/miner/${address}/chart`;
    return this.request(url, {});
  }

  getMinerPayments(address, page = 0) {
    const url = `/miner/${address}/payments?page=${page}`;
    return this.request(url, {});
  }

  getMinerPaymentCount(address) {
    const url = `/miner/${address}/paymentCount`;
    return this.request(url, {});
  }

  getMinerPaymentsChart(address) {
    const url = `/miner/${address}/paymentsChart`;
    return this.request(url, {});
  }

  getMinerBlocks(address, page = 0) {
    const url = `/miner/${address}/blocks?page=${page}`;
    return this.request(url, {});
  }

  getMinerBlockCount(address) {
    const url = `/miner/${address}/blockCount`;
    return this.request(url, {});
  }

  getMinerDetails(address) {
    const url = `/miner/${address}/details`;
    return this.request(url, {});
  }

  getMinerEstimatedDailyRevenue(address) {
    const url = `/miner/${address}/estimatedDailyRevenue`;
    return this.request(url, {});
  }

  getMinerRoundShare(address) {
    const url = `/miner/${address}/roundShare`;
    return this.request(url, {});
  }

  getMinerTotalPaid(address) {
    const url = `/miner/${address}/totalPaid`;
    return this.request(url, {});
  }

  getMinerTotalDonated(address) {
    const url = `/miner/${address}/totalDonated`;
    return this.request(url, {});
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

  getBlocks(page = 0) {
    const url = `/pool/blocks?page=${page}`;
    return this.request(url, {});
  }

  getBlockCount() {
    const url = '/pool/blockCount';
    return this.request(url, {});
  }

  getTopMiners() {
    const url = '/pool/topMiners';
    return this.request(url, {});
  }

  getTopDonators() {
    const url = '/pool/topDonators';
    return this.request(url, {});
  }

  getAverageLuckRoundtime() {
    const url = '/pool/avgLuckRoundtime';
    return this.request(url, {});
  }

  getCurrentLuck() {
    const url = '/pool/currentLuck';
    return this.request(url, {});
  }

  formatWeis = (weis) => {
    const amount = (weis / 10 ** 18).toPrecision(5);

    if (amount % 1 === 0) {
      return parseInt(amount);
    }
    return amount;
  };

  formatHashrate = (hashrate) => {
    if (hashrate === 0) {
      return '0 Bytes';
    }

    const k = 1000;
    const sizes = ['hashes', 'kH', 'MH', 'GH', 'TH', 'PH', 'EH', 'ZH', 'YH'];

    const i = Math.floor(Math.log(hashrate) / Math.log(k));

    return `${parseFloat((hashrate / k ** i).toFixed(2))} ${sizes[i]}/s`;
  };
}

module.exports = Flexpool;
