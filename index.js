import fetch from "node-fetch";

const API_KEY = "freekey"; // Public free Etherscan test key
const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"; // Example address

async function getBalance() {
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "1") {
    console.log("Error:", data.message);
    return;
  }

  const eth = Number(data.result) / 1e18;

  console.log(`Wallet: ${address}`);
  console.log(`Balance: ${eth.toLocaleString("en-US", { minimumFractionDigits: 4 })} ETH`);
}

getBalance();
