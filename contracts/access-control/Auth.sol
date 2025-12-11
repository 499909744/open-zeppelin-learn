// contracts/access-control/Auth.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Auth {
    address private _administrator;

    constructor(address deployer) {
        // 使合约的部署者成为管理员
        _administrator = deployer;
    }

    function isAdministrator(address user) public view returns (bool) {
        return user == _administrator;
    }
}   