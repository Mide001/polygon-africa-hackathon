import React, {useState } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { isAddress } from "ethers/lib/utils.js";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { useRouter } from "next/router";

export const BuyNFT = async () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [nftPrice, setnftPrice] = useState(0);
    const [price, setPrice] = useState("");
    const [data, setData] = useState({});

    const router = useRouter();
    const nftAddress = router.query.nftContract;
    const tokenId = router.query.tokenId;

    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const Token_Contract = useContract({
        addressOrName: tokenAddress,
        contractInterface: TOKEN_ABI,
        signerOrProvider: signer || provider,
    });

    const FetchTokenData = async ({ _tokenAddress }) => {
        try {
            setTokenAddress(address);
            const metadata = await fetch(tokenURI);
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);
            setData(metadataJSON);

            const _price = await Token_Contract.salePrice();
            const price = parseInt(_price.hex._value);
            setnftPrice(price);
        } catch (error) {
            console.error(error);
        }
    };

    const BuyNFT = async () => {
        try {
            console.log("Buying NFT...");
            const tx = await Token_Contract.purchaseNFT({
                value: ethers.utils.parseEther(price),
            });

            await tx.wait();
            console.log("NFT purchase complete");
        } catch (error) {
            console.error(error);
        }
    };
};