// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

interface Winner {
    function attempt() external;
}

contract Proxy {
    function kaChow(address contractAddress) public {
        Winner(contractAddress).attempt();
    }
}
