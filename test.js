const Flexpool = require('.');

test('should be defined', () => {
  expect(Flexpool).toBeDefined();
});

test('should return new Flexpool client', () => {
  const client = new Flexpool();
  expect(client.getPoolHashrate).toBeDefined();
  expect(client.getPoolHashrateChart).toBeDefined();
  expect(client.getMinersOnline).toBeDefined();
});
