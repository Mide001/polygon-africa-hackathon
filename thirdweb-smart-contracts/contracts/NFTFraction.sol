//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


import "./TokenNFT.sol";

contract NFTFraction {
    mapping(address => mapping(uint256 => TokenNFT)) public fractionalizedTokens;

    TokenNFT[] public _tokensintialized;

    function createToken(string memory _name, string memory _symbol, address _collectionAddress, uint256 _tokenId, uint256 _amount) public returns(address) {
        TokenNFT _token = new TokenNFT(_name, _symbol);
        fractionalizedTokens[_collectionAddress][_tokenId] = _token;
        _tokensintialized.push(_token);
        return address(_token);
    }

    function getAddress(address _collectionAddress, uint256 _tokenId) public view returns (address) {
        return address(fractionalizedTokens[_collectionAddress][_tokenId]);
    }

    function getTokens() public view returns(TokenNFT[] memory) {
        return _tokensintialized;
    }
}