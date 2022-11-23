//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


import "./TokenNFT.sol";

contract NFTFraction {

    // mapping from the contractc to the TokenID in the TokenNFT contract
    mapping(address => mapping(uint256 => TokenNFT)) public fractionalizedTokens;

    // an array to store all the tokens intialized
    TokenNFT[] public _tokensintialized;

    // create a new token for the NFT, and set approval
    function createToken(string memory _name, string memory _symbol, address _collectionAddress, uint256 _tokenId, uint256 _amount) public returns(address) {
        TokenNFT _token = new TokenNFT(_name, _symbol);
        fractionalizedTokens[_collectionAddress][_tokenId] = _token;
        _tokensintialized.push(_token);
        return address(_token);
    }

    function getAddress(address _collectionAddress, uint256 _tokenId) public view returns (address) {
        return address(fractionalizedTokens[_collectionAddress][_tokenId]);
    }

    // returns all the token intialized 
    function getTokens() public view returns(TokenNFT[] memory) {
        return _tokensintialized;
    }
}