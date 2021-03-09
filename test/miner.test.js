require('jest-extended');
const Flexpool = require('..');

const miner = '0xe76454a33A9c58838eA7F03c6A97071AA1c4a473';

test('getMinerBalance should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerBalance = await client.getMinerBalance(miner);
  expect(minerBalance).toContainAllKeys(['result', 'error']);
});

test('getMinerCurrentStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerCurrentStats = await client.getMinerCurrentStats(miner);
  expect(minerCurrentStats).toContainAllKeys(['result', 'error']);
  expect(minerCurrentStats).toHaveProperty('result.reported_hashrate');
  expect(minerCurrentStats).toHaveProperty('result.effective_hashrate');
});

test('getMinerDailyStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerDailyStats = await client.getMinerDailyStats(miner);
  expect(minerDailyStats).toContainAllKeys(['result', 'error']);
  expect(minerDailyStats).toHaveProperty('result.effective_hashrate');
  expect(minerDailyStats).toHaveProperty('result.invalid_shares');
  expect(minerDailyStats).toHaveProperty('result.reported_hashrate');
  expect(minerDailyStats).toHaveProperty('result.stale_shares');
  expect(minerDailyStats).toHaveProperty('result.valid_shares');
});

test('getMinerStats should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerStats = await client.getMinerStats(miner);
  expect(minerStats).toContainAllKeys(['result', 'error']);
  expect(minerStats).toHaveProperty('result.current.reported_hashrate');
  expect(minerStats).toHaveProperty('result.current.effective_hashrate');
  expect(minerStats).toHaveProperty('result.daily.reported_hashrate');
  expect(minerStats).toHaveProperty('result.daily.invalid_shares');
  expect(minerStats).toHaveProperty('result.daily.effective_hashrate');
  expect(minerStats).toHaveProperty('result.daily.stale_shares');
  expect(minerStats).toHaveProperty('result.daily.valid_shares');
});

test('getMinerWorkerCount should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerWorkerCount = await client.getMinerWorkerCount(miner);
  expect(minerWorkerCount).toContainAllKeys(['result', 'error']);
  expect(minerWorkerCount).toHaveProperty('result.offline');
  expect(minerWorkerCount).toHaveProperty('result.online');
});

test('getMinerWorkerCount should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerWorkers = await client.getMinerWorkers(miner);
  expect(minerWorkers).toContainAllKeys(['result', 'error']);
  expect(minerWorkers.result).toBeArray();

  for (const data of minerWorkers.result) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('online');
    expect(data).toHaveProperty('duplicate_workers_merged');
    expect(data).toHaveProperty('reported_hashrate');
    expect(data).toHaveProperty('effective_hashrate');
    expect(data).toHaveProperty('valid_shares');
    expect(data).toHaveProperty('stale_shares');
    expect(data).toHaveProperty('invalid_shares');
    expect(data).toHaveProperty('last_seen');
  }
});

test('getMinerExists should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerExists = await client.getMinerExists(miner);
  expect(minerExists).toContainAllKeys(['result', 'error']);
});

test('getMinerChart should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerChart = await client.getMinerChart(miner);
  expect(minerChart).toContainAllKeys(['result', 'error']);
  expect(minerChart.result).toBeArray();

  for (const data of minerChart.result) {
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

test('getMinerPayments should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerPayments = await client.getMinerPayments(miner);
  expect(minerPayments).toContainAllKeys(['result', 'error']);
  expect(minerPayments.result.data).toBeArray();
  expect(minerPayments).toHaveProperty('result.total_pages');
  expect(minerPayments).toHaveProperty('result.total_items');
  expect(minerPayments).toHaveProperty('result.items_per_page');

  for (const data of minerPayments.result.data) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('txid');
    expect(data).toHaveProperty('amount');
    expect(data).toHaveProperty('timestamp');
    expect(data).toHaveProperty('duration');
  }
});

test('getMinerPaymentCount should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerPaymentCount = await client.getMinerPaymentCount(miner);
  expect(minerPaymentCount).toContainAllKeys(['result', 'error']);
});

test('getMinerPaymentsChart should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerPaymentsChart = await client.getMinerPaymentsChart(miner);
  expect(minerPaymentsChart).toContainAllKeys(['result', 'error']);
  expect(minerPaymentsChart.result).toBeArray();

  for (const data of minerPaymentsChart.result) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('amount');
    expect(data).toHaveProperty('timestamp');
  }
});

test('getMinerBlocks should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerBlocks = await client.getMinerBlocks(miner);
  expect(minerBlocks).toContainAllKeys(['result', 'error']);
  expect(minerBlocks.result.data).toBeArray();
  expect(minerBlocks).toHaveProperty('result.total_pages');
  expect(minerBlocks).toHaveProperty('result.total_items');
  expect(minerBlocks).toHaveProperty('result.items_per_page');

  for (const data of minerBlocks.result.data) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('hash');
    expect(data).toHaveProperty('number');
    expect(data).toHaveProperty('type');
    expect(data).toHaveProperty('miner');
    expect(data).toHaveProperty('difficulty');
    expect(data).toHaveProperty('timestamp');
    expect(data).toHaveProperty('confirmed');
    expect(data).toHaveProperty('round_time');
    expect(data).toHaveProperty('luck');
    expect(data).toHaveProperty('server_name');
    expect(data).toHaveProperty('block_reward');
    expect(data).toHaveProperty('block_fees');
    expect(data).toHaveProperty('uncle_inclusion_rewards');
    expect(data).toHaveProperty('total_rewards');
  }
});

test('getMinerBlockCount should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerBlockCount = await client.getMinerBlockCount(miner);
  expect(minerBlockCount).toContainAllKeys(['result', 'error']);
});

test('getMinerDetails should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minerDetails = await client.getMinerDetails(miner);
  expect(minerDetails).toContainAllKeys(['result', 'error']);
  expect(minerDetails).toHaveProperty('result.min_payout_threshold');
  expect(minerDetails).toHaveProperty('result.pool_donation');
  expect(minerDetails).toHaveProperty('result.max_fee_price');
  expect(minerDetails).toHaveProperty('result.censored_email');
  expect(minerDetails).toHaveProperty('result.censored_ip');
  expect(minerDetails).toHaveProperty('result.first_joined');
});

test('getMinerEstimatedDailyRevenue should have correct response structure and type', async () => {
  const client = new Flexpool();
  const dailyRevenue = await client.getMinerEstimatedDailyRevenue(miner);
  expect(dailyRevenue).toContainAllKeys(['result', 'error']);
});

test('getMinerRoundShare should have correct response structure and type', async () => {
  const client = new Flexpool();
  const roundShare = await client.getMinerRoundShare(miner);
  expect(roundShare).toContainAllKeys(['result', 'error']);
});

test('getMinerTotalPaid should have correct response structure and type', async () => {
  const client = new Flexpool();
  const totalPaid = await client.getMinerTotalPaid(miner);
  expect(totalPaid).toContainAllKeys(['result', 'error']);
});

test('getMinerTotalDonated should have correct response structure and type', async () => {
  const client = new Flexpool();
  const totalDonated = await client.getMinerTotalDonated(miner);
  expect(totalDonated).toContainAllKeys(['result', 'error']);
});
