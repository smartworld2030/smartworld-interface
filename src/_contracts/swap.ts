const swap = {
  address: {
    56: '0x8a8Aed2b785D8664906b4d53aC0c3b3a0cf69bF4',
    97: '0x39FB428e740519C8FCd09Be21ba59032B2e063F9',
  },
  decimals: { bnb: 18, stts: 8 },
  abi: [
    'event SwapSttsForBnb(address indexed user,uint256 amountIn,uint256 amountOut)',
    'event SwapBnbForStts(address indexed user,uint256 amountIn,uint256 amountOut)',
    'event SwapSttForStts(address indexed user,uint256 amountIn,uint256 amountOut)',
    'function calculateSlippage(uint256 totalAmount,uint256 amounts) pure returns(uint256)',
    'function safeBnbSwap(uint256 paymentAmountIn,uint256 deadline) payable returns(uint256[] memory)',
    'function swapBNBtoSTTS(uint256 minSttsAmount, uint256 deadline) payable returns(uint256[] memory amounts)',
    'function BNBtoSTTSInfo(uint256 bnbAmounts) view returns(uint256 slippage,uint256 allowed,uint256 min,uint256 max)',
    'function BNBtoSTTSWithoutSlippage(uint256 bnbAmountIn) view returns(uint256)',
    'function BNBtoSTTSPrice() view returns(uint256)',
    'function estimatedBNBtoSTTS(uint256 bnbAmountIn) view returns(uint256)',
    'function swapSTTStoBNB(uint256 sttsAmount,uint256 minBnbAmount,uint256 deadline) returns(uint256[] memory amounts)',
    'function STTStoBNBInfo(uint256 sttsAmounts) view returns(uint256 slippage,uint256 allowed,uint256 min,uint256 max)',
    'function STTStoBNBWithoutSlippage(uint256 sttsAmountIn) view returns(uint256)',
    'function STTStoBNBPrice() view returns(uint256)',
    'function estimatedSTTStoBNB(uint256 sttsAmountIn) view returns(uint256)',
    'function safeSTTSwap(uint256 paymentAmountIn,uint256 minSttsAmount,uint256 percent,uint256 deadline) returns(uint256[2] memory)',
    'function swapSTTtoSTTS(uint256 sttAmountIn,uint256 minSttsAmount,uint256 maxSttsAmount,uint256 deadline) returns(uint256[2] memory amounts)',
    'function STTtoSTTSInfo(uint256 sttAmounts, uint256 percent) view returns(uint256 slippage,uint256 allowed,uint256 min,uint256 max)',
    'function estimatedSTTSforSTT(uint256 sttAmountIn) view returns(uint256)',
    'function STTStoSTTPrice() view returns(uint256)',
  ],
}
export default swap
