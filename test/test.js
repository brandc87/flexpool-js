require('jest-extended');
const Flexpool = require('..');

test('should be defined', () => {
  expect(Flexpool).toBeDefined();
});

test('should return new Flexpool client', () => {
  const client = new Flexpool();
  // Miner endpoints
  expect(client.getMinerBalance).toBeDefined();
  expect(client.getMinerCurrentStats).toBeDefined();
  expect(client.getMinerDailyStats).toBeDefined();
  expect(client.getMinerStats).toBeDefined();
  expect(client.getMinerWorkerCount).toBeDefined();
  expect(client.getMinerWorkers).toBeDefined();
  expect(client.getMinerWorkerCount).toBeDefined();
  expect(client.getMinerExists).toBeDefined();
  expect(client.getMinerChart).toBeDefined();
  expect(client.getMinerPayments).toBeDefined();
  expect(client.getMinerPaymentCount).toBeDefined();
  expect(client.getMinerPaymentsChart).toBeDefined();
  expect(client.getMinerBlocks).toBeDefined();
  expect(client.getMinerBlockCount).toBeDefined();
  expect(client.getMinerDetails).toBeDefined();
  expect(client.getMinerEstimatedDailyRevenue).toBeDefined();
  expect(client.getMinerRoundShare).toBeDefined();
  expect(client.getMinerTotalDonated).toBeDefined();
  expect(client.getMinerTotalDonated).toBeDefined();

  // Worker endpoints
  expect(client.getWorkerCurrentStats).toBeDefined();
  expect(client.getWorkerDailyStats).toBeDefined();
  expect(client.getWorkerStats).toBeDefined();
  expect(client.getWorkerChart).toBeDefined();

  // Pool endpoints
  expect(client.getPoolHashrate).toBeDefined();
  expect(client.getPoolHashrateChart).toBeDefined();
  expect(client.getMinersOnline).toBeDefined();
  expect(client.getWorkersOnline).toBeDefined();
  expect(client.getBlocks).toBeDefined();
  expect(client.getBlockCount).toBeDefined();
  expect(client.getTopMiners).toBeDefined();
  expect(client.getTopDonators).toBeDefined();
  expect(client.getAverageLuckRoundtime).toBeDefined();
  expect(client.getCurrentLuck).toBeDefined();
});
