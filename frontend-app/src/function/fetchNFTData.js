import React, { useState, useEffect } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../constants";
import { isAddress } from "ethers/lib/utils.js";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { useRouter } from "next/router";

export const FetchTokenData = async () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [nftPrice, setNftPrice] = useState(0);
    const [price, setPrice] = useState("");
    const [data, setData] = useState({});

    const router = useRouter();
    const nftAddress = router.query.nftContract;
    const tokenId = router.query.tokenId;


    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    useEffect(async () => {
        if(_tokenAddress) {
            setTokenAddress(_tokenAddress);
            await fetchTokenData(_tokenAddress);
        }
    }, []);
    
    const fetchTokenData = async ({ _tokenAddress }) => {
        try {
            setTokenAddress(address);

            console.log(response);

            const metadata = await fetch(tokenURI);
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);
            setData(metadataJSON);

            const _price = await Token_Contract.salePrice();
            const price = parseInt(_price.hex._value);
            setNftPrice(price);
        } catch (error) {
            console.error(error);
        }
    };

};