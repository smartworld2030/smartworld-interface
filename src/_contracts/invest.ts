const invest = {
  address: {
    56: '0x8f2974a63C3Df971d1A8ff5FdCebC49ae05948E3',
    97: '0x96Ab5e8812099509Eb62D236aE24D3E0117D3D36',
  },
  abi: [
    'event UpdateUser(address indexed user, uint256 value)',
    'event WithdrawInterest(address indexed user, uint256 hourly, uint256 referrals)',
    'event RegisterUser(address indexed user, address indexed referrer, uint256 value)',
    'function users(address) public view returns (uint256 id,uint256 refID,uint256 refAmounts,uint256 refPercent,uint256 latestWithdraw)',
    'function maxPercent() public view returns (uint256)',
    'function totalReward(uint256 value) public view returns (uint256)',
    'function hourlyReward(uint256 value) public view returns (uint256)',
    'function calculatePercent(address user, uint256 value) public view returns (uint256)',
    'function investBnb(address referrer) public payable returns (bool)',
    'function investStts(address referrer, uint256 value) public returns (bool)',
    'function investBtcb(address referrer, uint256 value) public returns (bool)',
    'function updateBnb() public payable returns (bool)',
    'function updateStts(uint256 value) public returns (bool)',
    'function updateBtcb(uint256 value) public returns (bool)',
    'function withdrawInterest() public returns (bool)',
    'function calculateInterest(address sender) public view returns (uint256 hourly,uint256 referral,uint256 requestTime)',
    'function userBalances(address user) public view returns (uint256 bnb,uint256 btcb,uint256 stts,uint256 satoshi)',
    'function userDepositNumber(address user) public view returns (uint256)',
    'function userDepositDetails(address user, uint256 index) public view returns (uint256 reward, uint256 endTime)',
    'function userExpireTime(address user) public view returns (uint256)',
    'function userExpired(address user) public view returns (bool)',
  ],
}

export default invest
