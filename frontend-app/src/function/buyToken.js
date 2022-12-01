import React, { useEffect, useState } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { isAddress } from "ethers/lib/utils.js";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { ethers, providers } from "ethers";
import { useRouter } from "next/router";



export const BuyToken = async () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState("");
    const [data, setData] = useState();

    const router = useRouter();
    const _tokenAddress = router.query.tokenContract;

    const Token_Contract = useContract({
        addressOrName: tokenAddress,
        contractInterface: TOKEN_ABI,
        signerOrProvider: signer || providers,
    });

    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    useEffect(() => {
        if(_tokenAddress) {
            setTokenAddress(_tokenAddress);
            await fetchTokenData(_tokenAddress);
        }
    }, []);

    useEffect(async () => {
        setAmount(quantity * tokenPrice);
    }, quantity);

    const FetchTokenData = async ({ _tokenAddress }) => {
        try {
            const data = await Token_Contract.tokenId();
            const tokenId = parseInt(data.hex._value);
            console.log(response);
            
            const _price = await Token_Contract.tokenPrice();
            const price = await parseInt(_price.hex._value);
            setTokenPrice(price);

            const metadata = await fetch(tokenURI);
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);
            setData(metadataJSON);
        } catch (error) {
            console.error(error);
        }
    };

    const buyTokens = async () => {
        try {
            console.log("Buying tokens for the NFT");
            const tx = await Token_Contract.buyToken(qty, {
                value: ethers.utils.parseEther(amount),
            });

            await tx.wait();
            console.log("Tokens bought");
        } catch (error) {
            console.error(error);
        }
    };
}