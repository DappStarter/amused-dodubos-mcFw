require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate rural modify give knee slot gate'; 
let testAccounts = [
"0x4971086b2b393ffe87f9cd9acead8b35b3801124c0bfcb7aae7b21b7caec9f29",
"0xd663de2dc6074ac6a4b09306987d24b94e556cf5488dae26e96014442b4a967b",
"0x2abfa08c2b54dd6a0123c06dcedd7da09cdc7cad7240025f63635a2c7e417875",
"0x317122f5a2d150b090b09d25a51a346d3e7728cd530f5f12aec84ae2fdee7ab1",
"0x72a6b59c946ccc4287839db0d4b21ea634cf750093d6d8638a55ec346be38f12",
"0xe6471458d8660bfa5652c982a488b337046fcf842f544b03103f205d10c5c466",
"0x5e75fb402faae1feba3a434ca1c50aeb5ed6d5da3a36afbae8ddbfd039312e3b",
"0x62f7e5049080e894b73f017ec4b894c552fd06f395cff33df2cb15b384fb05f1",
"0x50d45dda4378205a24d0fd8992d1ccda44e4ebbe83d4569f8063ec3675db0ee3",
"0x79d4605bee79ed329d1de292e70d3825bd737ec5d8afba4f6e19643ef355d921"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


