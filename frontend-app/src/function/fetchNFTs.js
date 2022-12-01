import React, { useState, useEffect } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { useProvider, useContract, useSigner, useAccount } from "wagmi";
import { ethers } from "ethers";

export const FetchNFTs = async () => {
    const [nfts, setNfts] = useState([]);
    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    useEffect(async () => {}, []);

    const FetchNFT = async () => {
        try {
            const promises = [];
            data.map((nft) => {
                const response = checkToken(nft);
                if(response == true) {
                    const data = fetchTokenData(nft);
                    promises.push(data);
                }
            });

            const _nfts = await Promise.all(promises);


            console.log(_nfts);
            setNfts(_nfts);
        } catch (error) {
            console.error(error);
        }
    };

    const FetchTokenData = async ({ _tokenAddress })  => {
        try {
            const Contract = useContract({
                addressOrName: _tokenAddress,
                contractInterface: TOKEN_ABI,
                signerOrProvider: signer || provider,
            });

            const data = await Contract.tokenId();
            const tokenId = parseInt(data.hex._value);

            const _price = await Token_Contract.salePrice();
            const price = await parseInt(_price.hex._value);

            console.log(response);

            const metadata = await fetch(tokenURI);
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);

            const NFT = {
                name: metadataJSON.name,
                description: metadataJSON.description,
                image: metadataJSON.image,
                price: ethers.utils.formatEther(price_),
                tokenAddress: _tokenAddress,
                tokenId: tokenId,
                collectionAddress: NFT_CONTRACT_ADDRESS,
            };

            return NFT;
        } catch (error) {
            console.error(error);
        }
    };

    const CheckToken = async ({ _tokenAddress }) => {
        try {
            const Token_Contract = useContract({
                addressOrName: _tokenAddress,
                contractInterface: TOKEN_ABI,
                signerOrProvider: signer || provider,
            });

            const data = await Token_Contract.saleStarted();

            return data;
        } catch (error) {
            console.error(error);
        }
    };
};