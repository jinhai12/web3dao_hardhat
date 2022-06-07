const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
require('@nomiclabs/hardhat-etherscan');

const {
  WHITELIST_CONTRACT_ADDRESS,
  METADATA_URL,
  CRYPTO_DEVS_NFT_CONTRACT_ADDRESS,
  FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS,
  CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS,
  VERIFY_CONTRACT_ADDRESS,
  VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE
} = require('../constants');

// async function main() {
//   const whitelistContract = await ethers.getContractFactory("Whitelist");
//   const deployedWhitelistContract = await whitelistContract.deploy(10);
//   await deployedWhitelistContract.deployed();

//   console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
// }

// async function main() {
//   const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
//   const metadataURL = METADATA_URL;
//   const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs');
//   const deployedCryptoDevsContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);

//   console.log("CryptoDevs Contract Address:", deployedCryptoDevsContract.address);
// }

// async function main() {
//   const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
//   const cryptoDevsTokenContract = await ethers.getContractFactory('CryptoDevToken');
//   const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);

//   console.log("Crypto Devs Token Contract Address:", deployedCryptoDevsTokenContract.address);
// }

// async function main() {
//   // const FakeNFTMarketplace = await ethers.getContractFactory('FakeNFTMarketplace');
//   // const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
//   // await fakeNftMarketplace.deployed();

//   // console.log("FakeNFTMarketplace Contract Address:", fakeNftMarketplace.address);

//   const CryptoDevsDAO = await ethers.getContractFactory('CryptoDevsDAO');
//   const cryptoDevsDAO = await CryptoDevsDAO.deploy(FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS, CRYPTO_DEVS_NFT_CONTRACT_ADDRESS, {
//     value: ethers.utils.parseEther('1')
//   });
//   await cryptoDevsDAO.deployed();

//   console.log('CryptoDevsDAO Contract: ', cryptoDevsDAO.address);
// }

// async function main() {
//   const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
//   const exchangeContract = await ethers.getContractFactory('Exchange');
//   const deployedExchangeContract = await exchangeContract.deploy(cryptoDevTokenAddress);
//   await deployedExchangeContract.deployed();
//   console.log('Exchange Contract Address:', deployedExchangeContract.address);
// }

// async function main() {
//   // const verifyContract = await ethers.getContractFactory('Verify');
//   // const deployedVerifyContract = await verifyContract.deploy();
//   // await deployedVerifyContract.deployed();
//   // console.log('Verify Contract Address: ', deployedVerifyContract.address);
//   console.log('Verify Contract Address: ', VERIFY_CONTRACT_ADDRESS);
//   console.log('Sleeping...');
//   await sleep(1000);
//   await hre.run('verify:verify', {
//     address: VERIFY_CONTRACT_ADDRESS,
//     constructorArguments: []
//   });
// }

// async function main() {
//   const metadataURL = 'ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/';
//   const lw3PunksContract = await ethers.getContractFactory('LW3Punks');
//   const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);
//   await deployedLW3PunksContract.deployed();
//   console.log('LW3Punks Contract Address:', deployedLW3PunksContract.address);
// }

async function main() {
  const randomWinnerGame = await ethers.getContractFactory('RandomWinnerGame');
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE);
  await deployedRandomWinnerGameContract.deployed();
  console.log('RandomWinnerGame Contract Address:', deployedRandomWinnerGameContract.address);

  console.log('Sleeping...');
  await sleep(30000);
  await hre.run('verify:verify', {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });