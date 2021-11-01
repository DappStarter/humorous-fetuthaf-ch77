require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain smile inner produce borrow seed'; 
let testAccounts = [
"0x258517bb1f44648cfbd6b0a07c06cf855e3ec3984ed93d32e82a9b3c04234988",
"0xefddbd20da9b1439d7033a5b281f367442967ed83d7b00889dd17d3f374711ac",
"0x8de9d5903d77ea9770947324733628fd493edb595c8cbff52c9c55f466c14bb2",
"0x6c4d8f0e8418e6493a27ca5e0aca524cd02155e1a748785536df10977e00738a",
"0x64752526bcb7566d3864c8e6aca2140b7bd5cacab4c9973b3724ebef3b30f3b0",
"0x2d495aa1efeaa3167bdb2690204419340ca5eb1fe9441794799423f83e5b3fda",
"0x8a43c7d7fd3d32d619567b137c731036c0a268cd8739ab06bc9908f3af32cbfb",
"0x724843f3616877242fad74e1a36b73e1d15ea479b02dc48056af5cca53e52710",
"0xcaf0a07b8f4a7bc5abd5dcbde031b9e0e8200d71581bfbd4d0894691726c8a22",
"0x5f6ac8d35c52bb5260f442f3ade63476762e541ebc622be2127afb146b70fbb8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

