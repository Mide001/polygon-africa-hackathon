//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/Base/ERC20Base.sol";
import "@thirdweb-dev/contracts/eip/interface/IERC721A.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/utils/ERC721Holder.sol";


/*contract TOKEN allows the sale of tokens from the frontend and can be redeemed
The redeemed is only activated after the NFT has been sold out */

contract Token is ERC20Base, Ownable, ERC721Holder {
    IERC721A public collectionAddress;
    uint256 public tokenId;

    // initializing the initial state of the smart contract
    bool public initialized = false;
    bool public saleStarted = false;
    bool public tokenSaleStarted = false;
    bool public canRedeem = false;

    // declaring the variable totalSupply and sold for tokens 
    uint256 public sold;
    uint256 public total;
    
    // declaring the variable name for the sale price of tokens  and NFTs
    uint256 public salePrice;
    uint256 public tokenPrice;



    // creating events for the Tokens 

    event tokenCreated (string name, address _contractAddress, uint256 _tokenId, uint256 _amount);
    event tokenSaleStart(uint256 tokenPrice);
    event tokenBought(uint256 amount);
    event tokenSaleEnded();

    // creating events for the nfts 
    event NFTsaleStart(uint256 NFTPrice);
    event NFTsold(uint256 _price, address buyer);


    constructor (string memory _name, string memory _symbol, address _collectionAddress, uint256 _tokenId, uint256 _amount) ERC20(_name, _symbol) {
        require(!initialized, "Already initialized");
        collectionAddress = IERC721A(_collectionAddress);
        collectionAddress.safeTransferFrom(msg.sender, address(this), _tokenId);
        tokenId = _tokenId;
        initialized = true;
        total = _amount;
        emit tokenCreated(_name, _collectionAddress, _tokenId, _amount);
    }

    /// @dev - intialize the token sale for the NFT
    /// @param "_tokenPrice" - is the price of the single token the owner wants to set
    // function initializeSale can only be called by the owner only
    function initializeSale(uint256 _tokenPrice) external onlyOwner {
        require(initialized, "Token not initialized yet");
        tokenSaleStarted = true;
        tokenPrice = _tokenPrice;
        emit tokenSaleStart(_tokenPrice);
    }


    /// @dev - to buy the tokens or fractions of the NFT
    /// @dev - an amount to be sent by the buyer to the contract to complete minting of the token
    /// @param "_amount" - amount of the token buyer wants to get
    function buyToken(uint256 _amount) external payable {
        require(tokenSaleStarted, "Token is not for sale!");
        require(_amount <= total, "Amount must be greater than the totalSupply");
        requrie(msg.value >= tokenPrice * -_amount, "Not enough amount sent");
        _sold += _amount;
        _mint(msg.sender, _amount);
        emit tokenBought(_amount);
    }

    /// @dev - close the sale of token
    // the closeTokenSale() can be called by the owner
    function closeTokenSale() external onlyOwner {
        require(tokenSaleStarted, "Token sale already closed");
        tokenSaleStarted = false;
        emit tokenSaleEnded();
    }

    /// @dev - used to put the NFT on sale
    /// @dev - can only be called by the owner if the tokenPresale has been completed
    /// @param "price" - The minimum price of the NFT the owner wants to set
    function putForSale(uint256 price) external onlyOwner {
        require(tokenSaleStarted, "Token sale not completed yet");
        salePrice = price;
        saleStarted = true;
        emit NFTsaleStart(price);
    }

    
    /// @dev - to purchase the NFT by any user for an amount greater than or equal to the salePrice
    function purchaseNFT() external payable {
        require(saleStarted, "Not for sale!");
        require(msg.value >= salePrice, "Not enough amount sent");
        collectionAddress.transferFrom(address(this), msg.sender, tokenId);
        saleStarted = false;
        canRedeem = true;
        emit NFTsold(msg.value, msg.sender);
    }

    /// @dev - buyers can redeem the amount by burning the tokens they own
    /// @dev - activated only when the NFT is sold
    function redeem(uint256 _amount) external {
        require(canRedeem, "You cannot redeem");
        uint256 etherInContract = address(this).balance;
        uint256 toRedeem = (_amount * etherInContract) / totalSupply();
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(toRedeem);
    }

    /// @dev - mint tokens for the Owner
    /// @param "to" - address where token ought to be minted
    /// @dev "amount" - amount of the token to be minted
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /// @dev - withdraw the remaining amount in the contract
    /// @dev - will work when all the tokens are burnt
    function withdraw() public onlyOwner {
        require(totalSupply() == 0, "All token holders have not claimed yet");
        address _owner = msg.sender;
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    /// function to receive Ether
    receive() external payable {}
    /// fallback function is called when the msg.data is not empty
    fallback() external payable {}
}