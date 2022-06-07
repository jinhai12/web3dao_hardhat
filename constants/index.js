const {ethers, BigNumber } = require('hardhat')

const WHITELIST_CONTRACT_ADDRESS = '0xDdB4c5bf3Da0291D96c6Cb7449358Ac95EF8D5c0'

const METADATA_URL = 'https://nft-collection-sneh1999.vercel.app/api/'

const CRYPTO_DEVS_NFT_CONTRACT_ADDRESS = '0x3D1280788e3C9728C9F5dEd23F77d29654520D6C'

const FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS = '0x0C6486B82ce954Ef78f0Fb3727C6A4e0186922D0'

const CRYPTO_DEVS_DAO_CONTRACT_ADDRESS = '0x743091916CBb0Fe5eaaa736126080e55F04064db'

const CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS = '0x29762b7450397637389dADEDE806e32C2F335904'

const EXCHANGE_CONTRACT_ADDRESS = '0x92049Afb80B082EF9eb1A6C4C4452500193C167f'

const VERIFY_CONTRACT_ADDRESS = '0x3A6B4d3678ae89589F837A6c460698Ea4A3FA7d4'

const LW3PUNKS_CONTRACT_ADDRESS = '0xFC3B091A447FBA7D5482AeF60B8ae69f206aCA74'

const LINK_TOKEN = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'

const VRF_COORDINATOR = '0x8C7382F9D8f56b33781fE506E897a4F1e2d17255'

const KEY_HASH = '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4'

const FEE = ethers.utils.parseEther('0.0001')

const RANDOM_WINNER_GAME_CONTRACT_ADDRESS = '0xD7e233632223297d7A2f28405a5e461641Aa9eC1'

const FAKE_NFT_CONTRACT_ADDRESS = '0x3A6B4d3678ae89589F837A6c460698Ea4A3FA7d4'

module.exports = { 
  WHITELIST_CONTRACT_ADDRESS, 
  METADATA_URL, 
  CRYPTO_DEVS_NFT_CONTRACT_ADDRESS,
  FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS,
  CRYPTO_DEVS_DAO_CONTRACT_ADDRESS,
  CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS,
  VERIFY_CONTRACT_ADDRESS,
  LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE,
  RANDOM_WINNER_GAME_CONTRACT_ADDRESS,
  FAKE_NFT_CONTRACT_ADDRESS
}