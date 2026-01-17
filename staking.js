import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const stakingAddress = "0xYourStakingContract";
const abi = [];

export async function stakeTokens(amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(stakingAddress, abi, signer);
  await contract.stake(amount);
}

export async function claimRewards() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(stakingAddress, abi, signer);
  await contract.claim();
}

export async function getStakedAmount() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(stakingAddress, abi, signer);
  return await contract.balanceOf(signer.address);
}
