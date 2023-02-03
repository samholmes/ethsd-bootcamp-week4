import { ethers } from "ethers";
import { env } from "./env";
import proxyJson from './artifacts/contracts/Proxy.sol/Proxy.json'

const destinationContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
const proxyContractAddress = "0x86C00F093705c33E5eA91FB1845546880729ee47"

const proxyAbi = proxyJson.abi
const provider = new ethers.providers.JsonRpcProvider(env.goerliUrl)
const proxy = new ethers.Contract(proxyContractAddress, proxyAbi)
const signer = new ethers.Wallet(env.privateKey, provider)
const proxyGoerli = proxy.connect(signer)

async function main() {
  const receipt = await proxyGoerli.kaChow(destinationContractAddress, {
    gasLimit: '50000'
  })

  console.log('Completed leet haxor skillz')
  console.log(receipt)
}

main().catch(console.error)