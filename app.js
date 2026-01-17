import { connectWallet } from "./web3.js";
import { stakeTokens, claimRewards, getStakedAmount } from "./staking.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const amount = await getStakedAmount();
  document.getElementById("status").innerText =
    "Wallet connected. Staked: " + amount;
};

document.getElementById("stakeBtn").onclick = async () => {
  const amount = document.getElementById("amountInput").value;
  await stakeTokens(amount);
  alert("Tokens staked");
};

document.getElementById("claimBtn").onclick = async () => {
  await claimRewards();
  alert("Rewards claimed");
};
