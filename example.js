var Flexpool = require('.');

const client = new Flexpool();

client.getMinersOnline().then((data) => console.log(data));
