const Flexpool = require('.');

const client = new Flexpool();

client.getMinersOnline().then((data) => console.log(data));
client.getWorkersOnline().then((data) => console.log(data));
client.getBlocks().then((data) => console.log(data));
