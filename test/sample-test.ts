import { expect } from "chai";
import { ethers } from "hardhat";

describe("Proxy", function () {
  let contractAddress: string
  before(async function ()  {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    await contract.deployed();
    contractAddress = contract.address
  })

  it("will win at life", async function () {
    const contract = await ethers.getContractAt("Contract", contractAddress);

    const Proxy = await ethers.getContractFactory("Proxy");
    const proxy = await Proxy.deploy();
    await proxy.deployed();

    await expect(proxy.kaChow(contractAddress))
      .to.emit(contract, 'Winner');
  });

  it("will fail if given bogus address", async function () {
    const contract = await ethers.getContractAt("Contract", contractAddress);

    const Proxy = await ethers.getContractFactory("Proxy");
    const proxy = await Proxy.deploy();
    await proxy.deployed();

    await expect(proxy.kaChow("0xdeadbeef")).to.rejectedWith(/invalid address/gi)
  });
});