require('jest-extended');
const Flexpool = require('..');

test('getPoolHashrate should have correct response structure and type', async () => {
  const client = new Flexpool();
  const poolHashrate = await client.getPoolHashrate();
  expect(poolHashrate).toContainAllKeys(['result', 'error']);
  expect(poolHashrate).toHaveProperty('result.as');
  expect(poolHashrate).toHaveProperty('result.au');
  expect(poolHashrate).toHaveProperty('result.eu');
  expect(poolHashrate).toHaveProperty('result.sa');
  expect(poolHashrate).toHaveProperty('result.us');
  expect(poolHashrate).toHaveProperty('result.total');
});

test('getPoolHashrateChart should have correct response structure and type', async () => {
  const client = new Flexpool();
  const poolHashrateChart = await client.getPoolHashrateChart();
  expect(poolHashrateChart).toContainAllKeys(['result', 'error']);
  expect(poolHashrateChart.result).toBeArray();

  for (const data of poolHashrateChart.result) {
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('as');
    expect(data).toHaveProperty('au');
    expect(data).toHaveProperty('eu');
    expect(data).toHaveProperty('sa');
    expect(data).toHaveProperty('us');
    expect(data).toHaveProperty('total');
    expect(data).toHaveProperty('timestamp');
  }
});

test('getMinersOnline should have correct response structure and type', async () => {
  const client = new Flexpool();
  const minersOnline = await client.getMinersOnline();
  expect(minersOnline).toContainAllKeys(['result', 'error']);
});
