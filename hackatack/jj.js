const bitcoin = require('bitcoinjs-lib');
const RpcClient = require('bitcoin-rpc-promise');
const client = new RpcClient({
  protocol: 'http',
  user: 'rpcuser',
  pass: 'rpcpassword',
  host: 'localhost',
  port: 8332,
});

// Set the BTC address you want to scan for
const btcAddress = '1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i';

// Convert the BTC address from Base58 to hex
const hexAddress = bitcoin.address.toOutputScript(btcAddress).toString('hex');

// Get the current block height
client.getBlockCount().then((blockHeight) => {
  // Loop through each block and check for transactions containing the specified address
  for (let i = 1; i <= blockHeight; i++) {
    client.getBlockHash(i).then((blockHash) => {
      client.getBlock(blockHash).then((block) => {
        block.tx.forEach((txid) => {
          client.getRawTransaction(txid, true).then((tx) => {
            tx.vout.forEach((vout) => {
              vout.scriptPubKey.addresses.forEach((address) => {
                if (address === hexAddress) {
                  console.log(`Transaction ${txid} in block ${i} contains BTC address ${btcAddress}`);
                }
              });
            });
          });
        });
      });
    });
  }
});
