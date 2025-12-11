// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// 从 OpenZeppelin Contracts 库导入 Ownable
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;

    // 当存储的值更改时发出
    event ValueChanged(uint256 value);

    constructor() Ownable(msg.sender) {}


    // 在合约中存储一个新值
    function store(uint256 value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    // 读取最后存储的值
    function retrieve() public view returns (uint256) {
        return _value;
    }
}