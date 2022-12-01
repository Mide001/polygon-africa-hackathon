import React from "react";
import axios from "axios";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";

export const DeployData = async ({ files }) => {
    const accessToken = "b87a2875-ab66-4469-b3e5-a354ea5e9372";

    const output = await lighthouse.deploy(files, accessToken);
    console.log("File Status:", output);

    const metadataURI = `https://ipfs.io/ipfs${output.Hash}`;
    console.log("Visit at https://ipfs.io/ipfs" + output.Hash);
    
    return metadataURI;
};

const sign_message = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
        console.log("Account Connected: " + response[0]);
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const messageRequested = (
        await axios.get(
            `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
        )
    ).data;

    const signedMessage = await signer.signMessage(messageRequested);
    return {
        signedMessage: signedMessage,
        address: address,
    };
};