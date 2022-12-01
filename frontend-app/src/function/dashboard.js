import React, { useState } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { isAddress } from "ethers/lib/utils.js";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { providers } from "ethers";


export const Dashboard = async () => {
    const [_tokenAddress, set_tokenAddress] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [NFTPrice, setNFTPrice] = useState(0);

    const Token_Contract = useContract({
        addressOrName: _tokenAddress,
        contractInterface: TOKEN_ABI,
        signerOrProvider: signer || providers,
    });

    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const startTokenSale = async () => {
        try {
            console.log("Starting the sale for the NFTs...");
            const tx = await Token_Contract.putForSale(NFTPrice);
            await tx.wait();
            console.log("NFT Sale started");
        } catch (error) {
            console.error(error);
        }
    };

    const closeTokenSale = async () => {
        try {
            console.log("Closing the token sale of the tokens...");
            const tx = await Token_Contract.CloseTokenSale();
            await tx.wait();
            console.log("Token Sale closed");
        } catch (error) {
            console.error(error);
        }
    };

    const withdraw = async () => {
        try {
            console.log("Withdrawing the ETH amount");
            const tx = await Token_Contract.withdraw();
            await tx.wait();
            console.log("withdrawal completed");
        } catch (error) {
            console.error(error);
        }
    };
};