import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { env } from "./env";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: env.goerliUrl,
      accounts: [env.privateKey]
    },
  }
};

export default config;
