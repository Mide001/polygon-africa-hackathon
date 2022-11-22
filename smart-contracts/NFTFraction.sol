//SPDX-License-Identifier: MIT



pragma solidity ^0.8.4;

import "./Token.sol";

contract NFTFraction {
    // mapping from contract => token ID
    mapping (address => mapping(uint256 => Token)) public fractionalizedTokens;

    // create a variable to store all the tokensintialized
    Token[] public _tokensintialized;


    // create a new token for the NFT, check for approval and allow it
    function createToken(string memory _name, string memory _symbol, address _collectionAddress, uint256 _tokenId, uint256 _amount) public {
        Token _token = new Token (
            _name,
            _symbol,
            _collectionAddress,
            _tokenId,
            _amount
        );
        fractionalizedTokens[_collectionAddress][_tokenId] = _token;
        _tokensintialized.push(_token);
    }

    function getAddress(address _collectionAddress, uint256 _tokenId) public view returns(address) {
        return address(fractionalizedTokens[_collectionAddress][_tokenId]);
    }


    // returns all the token intialized 
    function getTokens() public view returns (Token[]) {
        return _tokensintialized;
    }
}