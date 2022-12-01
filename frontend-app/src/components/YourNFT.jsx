import React, { useState, useEffect } from "react";
import styles from "../css/Component.module.css";
import styles2 from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import image_ from "../assets/nft3.jpeg";
import { TOKENNFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { id, isAddress } from "ethers/lib/utils";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { Contract } from "ethers";

function YourNFT(props) {

    const [tokenId, setTokenId] = useState(0);
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [tokenAddress, setTokenAddress] = useState("");
    const [isOwner, setIsOwner] = useState(false);
    const [price, setPrice] = useState(0);
    const [tokenSale, setTokenSale] = useState(false);
    const [nftSale, setNftSale] = useState(false);
    const [intialized, setIntialized] = useState(false);

    const nft = props.nft;

    const [toggle, setToggle] = useState(false);

    let image = nft.rawMetadata.image;


    image = image.replace("ipfs://", "https://ipfs.io/ipfs");

    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const NFT_COLLECTION_CREATIVE_CONTRACT = useContract({
        address: TOKENNFT_CONTRACT_ADDRESS,
        abi: TOKEN_ABI,
        signerOrProvider: signer,
    });

    useEffect(() => {
        setTokenId(nft.tokenId);
        checkOwner();
    }, [nft]);

    const handleFractionalize = async () => { 
        try {
            if(isOwner) {
                await fractionalizeNFT(name, symbol, TOKENNFT_CONTRACT_ADDRESS, tokenId, amount);
                const Token_address = await fetchAddress(
                    TOKENNFT_CONTRACT_ADDRESS,
                    tokenId
                );

                await requestApproval(address, Token_address);
                await intiateFractionalization(Token_address, TOKENNFT_CONTRACT_ADDRESS, tokenId, amount);
                await checkStatus(Token_address);
            } 
        } catch (error) {
            console.error(error);
        }
    };

    const checkOwner = async () => {
        try {
            const tokenOwner = await NFT_COLLECTION_CREATIVE_CONTRACT.ownerOf(tokenId);
            console.log(tokenOwner)
            if(tokenOwner.toLowerCase() !== address.toLowerCase()) {
                console.log("You are not the owner of the NFT");
                setIsOwner(false);
            } else {
                setIsOwner(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fractionalizeNFT = async (_name, _symbol, _collectionAddress, _tokenId, _amount) => {
        try {
            console.log("Fractionalizing the NFT");
            console.log(_name, _symbol, _collectionAddress, _tokenId, _amount);
            const tx = await Fraction_contract.createToken(_name, _symbol, _collectionAddress, _tokenId, _amount);
            await tx.wait();
            console.log(tx);
            console.log("fractionalization complete...")
        } catch(error) {
            console.error(error);
        }
    };

    const fetchAddress = async (_collectionAddress, _tokenId) => {
        try {
            const data = await Fraction_contract.getAddress(_collectionAddress, _tokenId);
            console.log(data);
            const Token_address = data;
            setTokenAddress(Token_address);
            return Token_address;
        } catch (error) {
            console.error(error);
        }
    };
    
    const requestApproval = async (_address, _tokenAddress) => {
        try {
            const isApproved = await NFT_COLLECTION_CREATIVE_CONTRACT.isApprovedForAll(_address, _tokenAddress);
            console.log(isApproved);
            if(isApproved) {
                console.log("Requesting approval over NFTs...");

                const approvalTxn = await NFT_COLLECTION_CREATIVE_CONTRACT.setApprovalForAll(_tokenAddress, true);
                console.log("NFT Transfer Approval completed");
                console.log(approvalTxn);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const intiateFractionalization = async (_tokenAddress, _collectionAddress, _tokenId, _amount) => {
        try {
            const Token_Contract = new Contract(_tokenAddress, TOKEN_ABI, signer);
            console.log("initiating...");
            const intializeTx = await Token_Contract.initialize(_collectionAddress, _tokenId, _amount);
            await intializeTx.wait();
            console.log("Token Intialized");
        } catch (error) {
            console.log(error);
        }
    };

    const checkStatus = async (_tokenAddress) => {
        try {
            const Token_Contract = new Contract(_tokenAddress, TOKEN_ABI, signer);
            const _intialized = await Token_Contract.initialized();
            setIntialized(_intialized);

            if(intialized) {
                const tokenSaleStarted = await Token_Contract.tokenSaleStarted();
                setTokenSale(tokenSaleStarted);

                const nftSaleStarted = await Token_Contract.saleStarted();
                setNftSale(nftSaleStarted);
            } else {
                console.log("Not yet intialized");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const startTokenSale = async (_tokenAddress) => {
        try {
            const Token_Contract = new Contract(_tokenAddress, TOKEN_ABI, signer);
            console.log("Starting the sale for the tokens...");
            const tx = await Token_Contract.initializeSale(tokenPrice);
            await tx.wait();
            console.log("Token Sale Started");
        } catch (error) {
            console.error(error);
        }
    };

    const startNFTSale = async (_tokenAddress) => {
        try {
            const Token_Contract = new Contract(_tokenAddress, TOKEN_ABI, signer);
            console.log("Starting the sale for the NFTs...");
            const tx = await Token_Contract.putForSale(NFTPrice);
            await tx.wait();
            console.log("NFT Sale started");
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className={styles.card}>
            <div className={styles.image}>
                <Image className={styles.image} src={image ? image : image_} alt="Property image" width={"300px"} height={"220px"}></Image>
            </div>
            <div className={styles.card_content}>
                <h3>
                    <u>{nft.title}</u>
                </h3>
                <button onClick={() => {
                    setToggle(!toggle);
                }} className={`${styles2.btn} ${styles2.center}`}>List Tokens</button>
            </div>
            

            {toggle ? (
            <div className={styles2.buy}>
            <h3>Purchase Token</h3>
            <label htmlFor="">Enter number of tokens to release</label>
            <input className={styles.input} type="number" onChange={(e) => setAmount(e.target.value)} />
            <label htmlFor="">Enter Name Of the token</label>
            <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Enter symbol of the token</label>
            <input className={styles.input} type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
            <hr className={styles2.hr} />
            <button onClick={handleFractionalize} className={`${styles2.btn} ${styles2.center}`}>Publish Tokens</button>
            {intialized ? (
                <div>
                {!nftSale ? (
                    <button onClick={startNFTSale(tokenAddress)} className={`${styles2.btn} ${styles2.center}`}>Start NFT Sale</button>
                ) : (
                    <a></a>
                )}
                {!tokenSale ? (
                    <button onClick={startTokenSale(tokenAddress)} className={`${styles2.btn} ${styles2.center}`}>Start Token Sale</button>
                ) : (
                    <a></a>
                )}
                </div>
            ) : (
                <a></a>
            )}
            </div>
        ) : (
            ""
        )}
        </div>
        
    )
}


export default YourNFT;