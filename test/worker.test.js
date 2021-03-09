require('jest-extended');
const Flexpool = require('..');

const miner = '0xe76454a33A9c58838eA7F03c6A97071AA1c4a473';
const worker = 'WORKER001';

test('getWorkerCurrentStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const workerCurrentStats = await client.getWorkerCurrentStats(miner, worker);
  expect(workerCurrentStats).toContainAllKeys(['result', 'error']);
  expect(workerCurrentStats).toHaveProperty('result.effective_hashrate');
  expect(workerCurrentStats).toHaveProperty('result.reported_hashrate');
});

test('getWorkerDailyStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const workerDailyStats = await client.getWorkerDailyStats(miner, worker);
  expect(workerDailyStats).toContainAllKeys(['result', 'error']);
  expect(workerDailyStats).toHaveProperty('result.effective_hashrate');
  expect(workerDailyStats).toHaveProperty('result.reported_hashrate');
});

test('getWorkerStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const workerStats = await client.getWorkerStats(miner, worker);
  expect(workerStats).toContainAllKeys(['result', 'error']);
  expect(workerStats).toHaveProperty('result.current.effective_hashrate');
  expect(workerStats).toHaveProperty('result.current.reported_hashrate');
  expect(workerStats).toHaveProperty('result.daily.effective_hashrate');
  expect(workerStats).toHaveProperty('result.daily.reported_hashrate');
  expect(workerStats).toHaveProperty('result.daily.valid_shares');
  expect(workerStats).toHaveProperty('result.daily.stale_shares');
  expect(workerStats).toHaveProperty('result.daily.invalid_shares');
});

test('getWorkerChart should have correct response structure and type', async () => {
  const client = new Flexpool();
  const workerChart = await client.getWorkerChart(miner, worker);
  expect(workerChart).toContainAllKeys(['result', 'error']);
  expect(workerChart.result).toBeArray();

  for (const data of workerChart.result) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('timestamp');
    expect(data).toHaveProperty('effective_hashrate');
    expect(data).toHaveProperty('average_effective_hashrate');
    expect(data).toHaveProperty('reported_hashrate');
    expect(data).toHaveProperty('valid_shares');
    expect(data).toHaveProperty('stale_shares');
    expect(data).toHaveProperty('invalid_shares');
  }
});
