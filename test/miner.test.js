require('jest-extended');
const Flexpool = require('..');

test('getMinerBalance should have correct response structure and type', async () => {
  const client = new Flexpool();
  const miner = '0xe76454a33A9c58838eA7F03c6A97071AA1c4a473';
  const minerBalance = await client.getMinerBalance(miner);
  expect(minerBalance).toContainAllKeys(['result', 'error']);
});
