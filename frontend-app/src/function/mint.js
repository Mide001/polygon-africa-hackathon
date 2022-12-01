import React, { useState, useEffect } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";
import { StoreData } from "./storeData";
import { DeployData } from "./storeNFT";
import { useContractWrite } from "@thirdweb-dev/react";
import { concat } from "ethers/lib/utils.js";

export const Mint = async () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = ([]);

    const [ipfsImageURI, setIpfsImageURI] = useState("");
    const [ipfsUri, setIpfsUri] = useState("");

    const { address, isConnected } = useAccount();

    const { contract } = useContract(
        "0xA0Cf7646a1556F4C3821390263a1aCf8EdEd7E24"
    );

    const { mutate: mintTo, isLoading } = useContractWrite(
        contract,
        "mintTo"
    );

    const uploadImage = async () => {
        try {
            console.log("Uploading the image to IPFS via Web3.storage");
            const cid = await StoreData(files);
            const URL = `https://ipfs.io.ipfs/${cid}`;
            console.log(URL);
            console.log("Image uploaded to IPFS");
            setIpfsImageURI(URL);
            uploadImage(URL);
        } catch (error) {
            console.log("contract call failure", error);
        }
    };

    const uploadData = async ({ _name, _description, _imageURI }) => {
        try {
            console.log("Deploying the Data to IPFS via Lighthouse.storage");
            const URI = await DeployData(_name, _description, _imageURI);
            console.log(URI);
            setIpfsUri(URI);
            mintNFT(address, URI);
        } catch (error) {
            console.error("contract call failure", error);
        }
    };

    const mintNFT = async ({ _to, _tokenURI }) => {
        try {
            const data = await mintTo([_to, _tokenURI]);
            console.info("contract call success", data);
        } catch (error) {
            console.error("contract call failure", error);
        }
    };
};