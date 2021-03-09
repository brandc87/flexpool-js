const Flexpool = require('.');

const client = new Flexpool();
const miner = '0xe76454a33A9c58838eA7F03c6A97071AA1c4a473';

client.getMinerBalance(miner).then((data) => {
  console.log(client.formatWeis(data.result));
});

client.getMinerCurrentStats(miner).then((data) => {
  console.log(data);
  console.log(client.formatHashrate(data.result.effective_hashrate));
});

client.getMinersOnline().then((data) => console.log(data));
client.getWorkersOnline().then((data) => console.log(data));
client.getBlocks().then((data) => console.log(data));
