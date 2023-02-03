import hre, { ethers } from 'hardhat';
import { env } from '../env'

const { goerliUrl, privateKey } = env

async function main() {

  let artifacts = await hre.artifacts.readArtifact("Proxy");

  const provider = new ethers.providers.JsonRpcProvider(goerliUrl);

  let wallet = new ethers.Wallet(privateKey, provider);

  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let contract = await factory.deploy();

  console.log("Proxy address:", contract.address);

  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })