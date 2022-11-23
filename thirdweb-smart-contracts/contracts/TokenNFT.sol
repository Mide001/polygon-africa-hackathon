//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@thirdweb-dev/contracts/eip/interface/IERC721A.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";


// create a contract TokenNFT as the contracts for the tokens for these nfts
contract TokenNFT is ERC20, ERC721Holder {
    IERC721A public collectionAddress;
    uint256 public tokenId;


    // this is used to initialize the states of the contracts
    bool public initialized = false;
    bool public saleStarted = false;
    bool public tokenSaleStarted = false;
    bool public canRedeem = false;


    // a variable to store both totalsupply and number that has sold
    uint256 sold;
    uint256 total;

    // a variable to store the price of the tokens and the nfts
    uint256 public salePrice;
    uint256 public tokenPrice;

    // event for Tokens/fractions that was created
    event tokenCreated (address _contractAddress, uint256 _tokenId, uint256 _amount);

    event tokenSaleStart(uint256 tokenPrice);
    event tokenBought(uint256 amount);
    event tokenSaleEnded();

    event NFTsaleStart(uint256 NFTPrice);
    event NFTsold(uint256 _price, address buyer);

    constructor (string memory _name, string memory _symbol) ERC20(_name, _symbol) {}

    /// @dev - intialize the token and this is done by transferring the NFT first
    /// @dev - you need to approve the NFT for transfer by the contract
    /// @param _collectionAddress - address of the NFT collection
    /// @param _tokenId - tokenID of the NFT
    /// @param _amount - amount of the token to be issued
    function initialize(address _collectionAddress, uint256 _tokenId, uint256 _amount) external {
        require(!initialized, "Already initalized");
        collectionAddress = IERC721A(_collectionAddress);
        collectionAddress.safeTransferFrom(msg.sender, address(this), tokenId);
        tokenId = _tokenId;
        initialized = true;
        tokenSaleStarted = true;
        total = _amount;
        emit tokenCreated(_collectionAddress, _tokenId, _amount);
    } 

    /// @dev - intialize the token sale for the NFT
    /// @param _tokenPrice - price of the single token owner wants
    function initializeSale(uint256 _tokenPrice) external {
        require(initialized, "Token not initialized yet");
        tokenSaleStarted = true;
        tokenPrice = _tokenPrice;
        emit tokenSaleStart(_tokenPrice);
    }

    /// @dev - for buying tokens or fractions of the NFT
    /// @dev - amount the buyer wants to send to the contract, to complete the minting of the token
    /// @param _amount - amount of the token to buy
    function buyToken(uint256 _amount) external payable {
        require(tokenSaleStarted, "Not for sale");
        require(_amount <= total, "Token amount incorrect");
        require(msg.value >= tokenPrice * _amount, "Not enough amount sent");
        sold += _amount;
        _mint(msg.sender, _amount);
        emit tokenBought(_amount);
    }


    /// @dev - function to close the tokenSale
    /// @dev -can only be controlled by the owner
    function CloseTokenSale() external {
        require(tokenSaleStarted, "Token sale already closed");
        tokenSaleStarted = false;
        emit tokenSaleEnded();
    }

    
    /// @dev - putting the NFT for sale
    /// @dev - onlyOwner can call it when tokenPresale is completed
    /// @param price - the minimum price of the NFT the owner wants to set 
    function putForSale(uint256 price) external {
        require(tokenSaleStarted, "Token sale not completed yet");
        salePrice = price;
        saleStarted = true;
        emit NFTsaleStart(price);
    }

    /// @dev - purchase the NFT by any user for a price greater than or equal to the salePrice
    function purchaseNFT() external payable {
        require(saleStarted, "Not for sale");
        require(msg.value >= salePrice, "Not enough amount sent");
        collectionAddress.transferFrom(address(this), msg.sender, tokenId);
        saleStarted = false;
        canRedeem = true;
        emit NFTsold(msg.value, msg.sender);
    }

    /// @dev - buyers can redeem the amount by burning the Tokens they own
    /// @dev - this can only be called when the NFT is sold
    function redeem(uint256 _amount) external {
        require(canRedeem, "You cannot redeem");
        uint256 etherInContract = address(this).balance;
        uint256 toRedeem = (_amount * etherInContract) / totalSupply();
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(toRedeem);
    }

    /// @dev - mint tokens
    /// @param to - address to which tokens should be minted to 
    /// @param amount - amount of the tokens to be minted   
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    /// @dev - withdraw the money in the contract
    function withdraw() public {
        require(totalSupply() == 0, "All token holders have not claimed yet");
        address _owner = msg.sender;
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{ value: amount}("");
        require(sent, "Failed to send ether");
    }

    /// function to receive Ether
    receive() external payable {}

    /// fallback function is called when msg.data is not empty
    fallback() external payable {}
    
}