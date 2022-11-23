//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@thirdweb-dev/contracts/eip/interface/IERC721A.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract TokenNFT is ERC20, ERC721Holder {
    IERC721A public collectionAddress;
    uint256 public tokenId;

    bool public initialized = false;
    bool public saleStarted = false;
    bool public tokenSaleStarted = false;
    bool public canRedeem = false;


    uint256 sold;
    uint256 total;

    uint256 public salePrice;
    uint256 public tokenPrice;

    event tokenCreated (address _contractAddress, uint256 _tokenId, uint256 _amount);

    event tokenSaleStart(uint256 tokenPrice);
    event tokenBought(uint256 amount);
    event tokenSaleEnded();

    event NFTsaleStart(uint256 NFTPrice);
    event NFTsold(uint256 _price, address buyer);

    constructor (string memory _name, string memory _symbol) ERC20(_name, _symbol) {}

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

    function initializeSale(uint256 _tokenPrice) external {
        require(initialized, "Token not initialized yet");
        tokenSaleStarted = true;
        tokenPrice = _tokenPrice;
        emit tokenSaleStart(_tokenPrice);
    }

    function buyToken(uint256 _amount) external payable {
        require(tokenSaleStarted, "Not for sale");
        require(_amount <= total, "Token amount incorrect");
        require(msg.value >= tokenPrice * _amount, "Not enough amount sent");
        sold += _amount;
        _mint(msg.sender, _amount);
        emit tokenBought(_amount);
    }

    function CloseTokenSale() external {
        require(tokenSaleStarted, "Token sale already closed");
        tokenSaleStarted = false;
        emit tokenSaleEnded();
    }

    function putForSale(uint256 price) external {
        require(tokenSaleStarted, "Token sale not completed yet");
        salePrice = price;
        saleStarted = true;
        emit NFTsaleStart(price);
    }

    function purchaseNFT() external payable {
        require(saleStarted, "Not for sale");
        require(msg.value >= salePrice, "Not enough amount sent");
        collectionAddress.transferFrom(address(this), msg.sender, tokenId);
        saleStarted = false;
        canRedeem = true;
        emit NFTsold(msg.value, msg.sender);
    }

    function redeem(uint256 _amount) external {
        require(canRedeem, "You cannot redeem");
        uint256 etherInContract = address(this).balance;
        uint256 toRedeem = (_amount * etherInContract) / totalSupply();
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(toRedeem);
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function withdraw() public {
        require(totalSupply() == 0, "All token holders have not claimed yet");
        address _owner = msg.sender;
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{ value: amount}("");
        require(sent, "Failed to send ether");
    }

    receive() external payable {}

    fallback() external payable {}
    
}