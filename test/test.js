require('jest-extended');
const Flexpool = require('..');

test('should be defined', () => {
  expect(Flexpool).toBeDefined();
});

test('should return new Flexpool client', () => {
  const client = new Flexpool();

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
