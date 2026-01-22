// earn.js - Free Earn VNTT JavaScript

// ========== CONFIGURATION ==========
// ⚠️ IMPORTANT: Replace these with your actual contract addresses after deployment
const VNTT_TOKEN_ADDRESS = '0x6033849Dc89eC1DB364EFcd8A6cf9Bc095cD3e41'; // Your VNTT token address
const MAIN_CONTRACT_ADDRESS = '0x937ECf80b29fca3876340106f49F4214783BfC18'; // Your VNetworkMain contract address
const USDT_TOKEN_ADDRESS = '0x55d398326f99059fF775485246999027B3197955'; // BSC Testnet USDT

// ========== CONTRACT ABIs (Simplified) ==========
const vnttABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"EmergencyModeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensRecovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Unblacklisted","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recoverer","type":"address"}],"name":"addAuthorizedRecoverer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"authorizedRecoverers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"batchTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deactivateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"hackerAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyTokenRecovery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"forceTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAuthorizedRecoverers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAuthorizedRecoverer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recoverer","type":"address"}],"name":"removeAuthorizedRecoverer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unblacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const mainABI = [{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"locked","type":"bool"}],"name":"ContractLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DailyClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SocialBonusClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"TaskCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UserActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"paidWithVNTT","type":"bool"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"antiBotEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"usersList","type":"address[]"}],"name":"batchResetDailyClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimSocialBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"completeSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyTokenWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceActivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"add","type":"bool"}],"name":"forceUpdateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAvailableWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectStats","outputs":[{"internalType":"uint256","name":"_totalUsers","type":"uint256"},{"internalType":"uint256","name":"_activeUsers","type":"uint256"},{"internalType":"uint256","name":"_totalVolume","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawals","type":"uint256"},{"internalType":"uint256","name":"_remainingDays","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"depth","type":"uint256"}],"name":"getReferralChain","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256[4]","name":"socialTasks","type":"uint256[4]"},{"internalType":"bool","name":"socialBonusClaimed","type":"bool"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"uint256[10]","name":"referralEarnings","type":"uint256[10]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isEligibleForWithdrawal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastActivityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxDailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minTimeBetweenActions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetDailyClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setActivationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"setDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setMaxDailyClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setMinTimeBetweenActions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"setProjectDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"rewards","type":"uint256[]"}],"name":"setReferralRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"setTaskReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taskReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleAntiBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleProjectStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVolume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"bool","name":"socialBonusClaimed","type":"bool"},{"internalType":"uint256","name":"directReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnttToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"payWithVNTT","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

// ========== GLOBAL VARIABLES ==========
let web3;
let userAddress;
let vnttContract;
let mainContract;
let usdtContract;
let isOwner = false;

// ========== WALLET FUNCTIONS ==========
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert('Please install MetaMask to continue!');
            return;
        }
        
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];
        
        // Initialize contracts
        vnttContract = new web3.eth.Contract(vnttABI, VNTT_TOKEN_ADDRESS);
        mainContract = new web3.eth.Contract(mainABI, MAIN_CONTRACT_ADDRESS);
        usdtContract = new web3.eth.Contract(usdtABI, USDT_TOKEN_ADDRESS);
        
        // Update UI
        document.getElementById('walletStatusText').textContent = 'Connected';
        document.getElementById('walletStatusText').style.color = '#2ecc71';
        document.getElementById('walletAddressText').textContent = userAddress;
        document.getElementById('referralLinkText').textContent = 
            `https://vnetwork.com/ref/${userAddress}`;
        
        // Load user data
        await loadUserData();
        
        // Check if user needs activation
        const userInfo = await mainContract.methods.getUserInfo(userAddress).call();
        if (!userInfo[1] && userInfo[2] > 0) { // isActive = false, but registered
            setTimeout(() => {
                showActivationModal();
            }, 1000);
        }
        
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showError('Error connecting wallet: ' + error.message);
    }
}

// ========== USER DATA FUNCTIONS ==========
async function loadUserData() {
    if (!mainContract || !userAddress) return;
    
    try {
        const userInfo = await mainContract.methods.getUserInfo(userAddress).call();
        
        // Update statistics
        const totalEarned = web3.utils.fromWei(userInfo[4], 'ether');
        const lockedTokens = web3.utils.fromWei(userInfo[6], 'ether');
        const directReferrals = userInfo[10];
        const isActive = userInfo[1];
        const lastClaimTime = userInfo[7];
        
        document.getElementById('totalEarnedStat').textContent = 
            parseFloat(totalEarned).toFixed(2) + ' VNTT';
        document.getElementById('lockedTokensStat').textContent = 
            parseFloat(lockedTokens).toFixed(2) + ' VNTT';
        document.getElementById('referralsStat').textContent = directReferrals;
        
        // Update account status
        const accountStatusElement = document.getElementById('accountStatusStat');
        accountStatusElement.textContent = isActive ? 'Active ✅' : 'Inactive ❌';
        accountStatusElement.style.color = isActive ? '#2ecc71' : '#e74c3c';
        
        // Update next claim info
        const claimInfoElement = document.getElementById('nextClaimInfo');
        if (isActive && lastClaimTime > 0) {
            const nextClaimTime = parseInt(lastClaimTime) + 86400; // 24 hours in seconds
            const currentTime = Math.floor(Date.now() / 1000);
            
            if (currentTime < nextClaimTime) {
                const hoursLeft = Math.floor((nextClaimTime - currentTime) / 3600);
                const minutesLeft = Math.floor(((nextClaimTime - currentTime) % 3600) / 60);
                claimInfoElement.textContent = `Next claim in: ${hoursLeft}h ${minutesLeft}m`;
                claimInfoElement.style.color = '#f39c12';
            } else {
                claimInfoElement.textContent = 'Ready to claim!';
                claimInfoElement.style.color = '#2ecc71';
            }
        } else {
            claimInfoElement.textContent = isActive ? 'Ready for first claim!' : 'Activate account to claim';
        }
        
        // Update task statuses
        const socialTasks = userInfo[8];
        for (let i = 0; i < 4; i++) {
            const taskElement = document.getElementById(`task${i}Status`);
            if (taskElement) {
                if (socialTasks[i] > 0) {
                    taskElement.textContent = 'Completed';
                    taskElement.className = 'task-status status-completed';
                } else {
                    taskElement.textContent = 'Pending';
                    taskElement.className = 'task-status status-pending';
                }
            }
        }
        
        // Update bonus status
        const bonusClaimed = userInfo[9];
        const bonusElement = document.getElementById('bonusStatus');
        if (bonusElement) {
            if (bonusClaimed) {
                bonusElement.textContent = 'Bonus already claimed!';
                bonusElement.style.color = '#2ecc71';
            } else {
                const allTasksCompleted = socialTasks.every(task => task > 0);
                if (allTasksCompleted) {
                    bonusElement.textContent = 'All tasks completed! Claim your bonus now.';
                    bonusElement.style.color = '#f39c12';
                } else {
                    const completedCount = socialTasks.filter(task => task > 0).length;
                    bonusElement.textContent = `Complete ${4 - completedCount} more tasks to claim bonus`;
                    bonusElement.style.color = '#3498db';
                }
            }
        }
        
        // Check if user is owner
        const ownerAddress = await mainContract.methods.owner().call();
        isOwner = (userAddress.toLowerCase() === ownerAddress.toLowerCase());
        
        // Show/hide admin section
        const adminSection = document.getElementById('adminSection');
        if (isOwner) {
            adminSection.style.display = 'block';
        } else {
            adminSection.style.display = 'none';
        }
        
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// ========== TASK FUNCTIONS ==========
async function dailyClaim() {
    if (!mainContract || !userAddress) {
        showError('Please connect your wallet first!');
        return;
    }
    
    try {
        showLoading('Claiming daily reward...');
        const tx = await mainContract.methods.dailyClaim()
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess('Daily reward claimed successfully! 100 VNTT added to your account.');
        await loadUserData();
        
    } catch (error) {
        hideLoading();
        console.error('Error claiming daily reward:', error);
        showError('Error: ' + error.message);
    }
}

async function completeTask(taskId) {
    if (!mainContract || !userAddress) {
        showError('Please connect your wallet first!');
        return;
    }
    
    // Task names for display
    const taskNames = ['Facebook', 'Instagram', 'Twitter', 'YouTube'];
    
    try {
        // Ask user to confirm they completed the task
        const confirmComplete = confirm(
            `Have you completed the ${taskNames[taskId]} task?\n\n` +
            `1. Go to ${taskNames[taskId]}\n` +
            `2. Follow/Subscribe to our page\n` +
            `3. Then click OK to claim your reward`
        );
        
        if (!confirmComplete) return;
        
        showLoading(`Completing ${taskNames[taskId]} task...`);
        const tx = await mainContract.methods.completeSocialTask(taskId)
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess(`${taskNames[taskId]} task completed! 100 VNTT added to your account.`);
        await loadUserData();
        
    } catch (error) {
        hideLoading();
        console.error('Error completing task:', error);
        showError('Error: ' + error.message);
    }
}

async function claimSocialBonus() {
    if (!mainContract || !userAddress) {
        showError('Please connect your wallet first!');
        return;
    }
    
    try {
        showLoading('Claiming social bonus...');
        const tx = await mainContract.methods.claimSocialBonus()
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess('Social bonus claimed successfully! 400 VNTT added to your account.');
        await loadUserData();
        
    } catch (error) {
        hideLoading();
        console.error('Error claiming social bonus:', error);
        showError('Error: ' + error.message);
    }
}

// ========== ACTIVATION FUNCTIONS ==========
function showActivationModal() {
    document.getElementById('activationModal').style.display = 'flex';
    document.getElementById('modalStatus').textContent = 'Ready to activate account...';
    document.getElementById('modalSpinner').style.display = 'none';
    document.getElementById('approveBtn').style.display = 'block';
    document.getElementById('payBtn').style.display = 'none';
}

function closeModal() {
    document.getElementById('activationModal').style.display = 'none';
    document.getElementById('modalSpinner').style.display = 'none';
}

async function approveUSDT() {
    try {
        document.getElementById('modalSpinner').style.display = 'block';
        document.getElementById('modalStatus').textContent = 'Approving USDT...';
        document.getElementById('approveBtn').disabled = true;
        
        const activationFeeWei = web3.utils.toWei('0.30', 'ether');
        
        const tx = await usdtContract.methods.approve(MAIN_CONTRACT_ADDRESS, activationFeeWei)
            .send({ from: userAddress });
        
        document.getElementById('modalStatus').textContent = 'USDT approved successfully! Now click "Pay 0.30 USDT" to activate account.';
        document.getElementById('modalSpinner').style.display = 'none';
        document.getElementById('approveBtn').style.display = 'none';
        document.getElementById('payBtn').style.display = 'block';
        document.getElementById('approveBtn').disabled = false;
        
    } catch (error) {
        console.error('Error approving USDT:', error);
        document.getElementById('modalStatus').textContent = 'Error: ' + error.message;
        document.getElementById('modalSpinner').style.display = 'none';
        document.getElementById('approveBtn').disabled = false;
    }
}

async function payActivationFee() {
    try {
        document.getElementById('modalSpinner').style.display = 'block';
        document.getElementById('modalStatus').textContent = 'Processing activation...';
        document.getElementById('payBtn').disabled = true;
        
        const tx = await mainContract.methods.activate()
            .send({ from: userAddress });
        
        document.getElementById('modalStatus').textContent = '✅ Account activated successfully!';
        document.getElementById('modalSpinner').style.display = 'none';
        
        setTimeout(() => {
            closeModal();
            loadUserData();
            showSuccess('Account activated! You can now claim daily rewards.');
        }, 2000);
        
    } catch (error) {
        console.error('Error activating account:', error);
        document.getElementById('modalStatus').textContent = 'Error: ' + error.message;
        document.getElementById('modalSpinner').style.display = 'none';
        document.getElementById('payBtn').disabled = false;
    }
}

// ========== UTILITY FUNCTIONS ==========
function copyReferralLink() {
    const link = document.getElementById('referralLinkText').textContent;
    if (link === 'Connect wallet to get your link') {
        showError('Please connect your wallet first!');
        return;
    }
    
    navigator.clipboard.writeText(link).then(() => {
        showSuccess('Referral link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showError('Failed to copy link. Please try again.');
    });
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

// ========== ADMIN FUNCTIONS ==========
async function resetDailyClaims() {
    if (!isOwner) {
        showError('Only contract owner can perform this action!');
        return;
    }
    
    try {
        const confirmAction = confirm('Are you sure you want to reset daily claims for all users?');
        if (!confirmAction) return;
        
        showLoading('Resetting daily claims...');
        const tx = await mainContract.methods.resetDailyClaims()
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess('Daily claims reset successfully!');
        
    } catch (error) {
        hideLoading();
        console.error('Error resetting daily claims:', error);
        showError('Error: ' + error.message);
    }
}

async function toggleProjectStatus() {
    if (!isOwner) {
        showError('Only contract owner can perform this action!');
        return;
    }
    
    try {
        const confirmAction = confirm('Are you sure you want to toggle project status?');
        if (!confirmAction) return;
        
        showLoading('Toggling project status...');
        const tx = await mainContract.methods.toggleProjectStatus()
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess('Project status toggled successfully!');
        
    } catch (error) {
        hideLoading();
        console.error('Error toggling project status:', error);
        showError('Error: ' + error.message);
    }
}

async function toggleAntiBot() {
    if (!isOwner) {
        showError('Only contract owner can perform this action!');
        return;
    }
    
    try {
        const confirmAction = confirm('Are you sure you want to toggle anti-bot protection?');
        if (!confirmAction) return;
        
        showLoading('Toggling anti-bot protection...');
        const tx = await mainContract.methods.toggleAntiBot()
            .send({ from: userAddress });
        
        hideLoading();
        showSuccess('Anti-bot protection toggled successfully!');
        
    } catch (error) {
        hideLoading();
        console.error('Error toggling anti-bot:', error);
        showError('Error: ' + error.message);
    }
}

// ========== UI HELPER FUNCTIONS ==========
function showLoading(message) {
    // You can implement a loading spinner here
    console.log('Loading:', message);
}

function hideLoading() {
    // Hide loading spinner
    console.log('Loading complete');
}

function showSuccess(message) {
    alert('✅ ' + message);
}

function showError(message) {
    alert('❌ ' + message);
}

// ========== INITIALIZATION ==========
// Auto-connect wallet on page load if previously connected
window.addEventListener('load', async () => {
    if (window.ethereum && window.ethereum.selectedAddress) {
        await connectWallet();
    }
    
    // Add click event to close modal when clicking outside
    document.getElementById('activationModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});

// Handle account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
            userAddress = accounts[0];
            await loadUserData();
        } else {
            // User disconnected wallet
            location.reload();
        }
    });
    
    window.ethereum.on('chainChanged', () => {
        location.reload();
    });
}
