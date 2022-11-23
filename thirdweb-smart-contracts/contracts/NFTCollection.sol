//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


import "@thirdweb-dev/contracts/base/ERC721Base.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";


contract Creatives is ERC721Base {

    constructor(string memory _name, string memory _symbol, address _royaltyRecipient, uint128 _royaltyBps) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

    function mintTo(address _to, string memory _tokenURI) public virtual override {
        _setTokenURI(nextTokenIdToMint(), _tokenURI);
        _safeMint(_to, 1, "");
    }

    receive() external payable {}

    fallback() external payable {}
}