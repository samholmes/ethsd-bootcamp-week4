# Week4 – Winning

## Solution

In order to solve this challenge, I created a "proxy" contract (0x86C00F093705c33E5eA91FB1845546880729ee47) to call the destination contract (0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502).
Duh, winning!

## Installation

```shell
npm i # install
npx configure env.ts # configure
vim .env.json # edit config
```

## Testing

```shell
npm hardhat test
```

## Deploying

```shell
npx hardhat run scripts/deploy.ts --network goerli
```

This contract has been deployed to [0x86C00F093705c33E5eA91FB1845546880729ee47](https://goerli.etherscan.io/address/0x86C00F093705c33E5eA91FB1845546880729ee47).

# Executing

```shell
node -r sucrase/register win.ts
```

# Success

Successful execution illustrated with the following transaction: [0x9598be24000ab77a77ce9aa9d55d6f15cc859db15e7fba8aa64687508de3663c](https://goerli.etherscan.io/tx/0x9598be24000ab77a77ce9aa9d55d6f15cc859db15e7fba8aa64687508de3663c)