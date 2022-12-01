import React, { useState, useEffect } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { isAddress } from "ethers/lib/utils.js";
import { useProvider, useContract, useSigner, useAccount } from "wagmi";
import { ethers } from "ethers";
import { Contract } from "alchemy-sdk";

export const BuyToken = async () => {
    const [tokens, setTokens] = useState([]);

    const { address, isConnected } = useState();
    const provider = useProvider();
    const { data: signer } = useSigner();


    useEffect(async () => {}, []);

    const FetchNFTs = async () => {
        try {
            const promises = [];
            data.map((token) => {
                const response = checkToken(token);
                if(response == true) {
                    const data = fetchTokenData(token);
                    promises.push(data);
                }
            });

            const _tokens = await Promise.all(promises);
            console.log(_nfts);
            setTokens(_tokens);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTokenData = async (_tokenAddress) => {
        try {
            const data = await Contract.tokenId();
            const tokenId = parseInt(data.hex._value);

            const _price = await Token_Contract.tokenPrice();
            const price = parseInt(_price.hex._value);

            const _sold = await Token_Contract.sold();
            const sold = parseInt(_sold.hex._value);

            const _total = await Token_Contract.total();
            const total = praseInt(_total.hex._value);

            console.log(response);


            const metadata = await fetch(tokenURI)
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);

            const Token = {
                name: metadataJSON.name,
                description: metadataJSON.description,
                image: metadataJSON.image,
                price: ethers.utils.formatEther(price_),
                sold: sold_,
                total: total_,
                tokenAddress: _tokenAddress,
                tokenId: tokenId,
                collectionAddress: NFT_CONTRACT_ADDRESS,
            };

            return Token;
        } catch (error) {
            console.error(error);
        }
    };

    const checkToken = async() => {
        try {
            const data = await Token_Contract.tokenSaleStarted();
            return data;
        } catch(error) {
            console.error(error)
        }
    };
};