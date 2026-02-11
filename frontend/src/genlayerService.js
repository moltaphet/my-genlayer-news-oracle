import { createClient, http } from "genlayer-js";

// Connection to GenLayer Asimov Testnet
const endpoint = "https://rpc.asimov.genlayer.com";

export const client = createClient({
  chain: "asimov",
  transport: http(endpoint),
});

// Use the address after successful deployment in Studio/CLI
export const CONTRACT_ADDRESS = "0xYour_Contract_Address_Here";

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error("Wallet connection failed", error);
    }
  } else {
    console.error("MetaMask is not installed");
  }
};