import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useAccount, useSigner, useProvider, useContract} from "wagmi";
import { StoreMetadata } from "../src/function/StoreMetadata";
import { NFT_CREATE_ADDRESS, NFT_CREATE_ABI } from "../src/constants";


function Create() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);

    const [ipfsUrl, setIpfsUrl] = useState("");

    const provider = useProvider();
    const { data: signer } = useSigner();
    const { address } = useAccount();

    const NFT_CONTRACT = useContract({
        address: NFT_CREATE_ADDRESS,
        abi: NFT_CREATE_ABI,
        signerOrProvider: signer,
    });


    /*const NFT_CONTRACT = useContract({
        addressOrName: NFT_CREATE_ADDRESS,
        contractInterface: NFT_CREATE_ABI,
        signerOrProvider: signer || provider,
    }); */  

    const uploadMetadata = async () => {
        try {
            const metadata = await StoreMetadata(image, name, description);
            const url = `https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`;
            console.log(url);
            setIpfsUrl(url);
            console.log("NFT netadata uploaded to IPFS");
            await mintNFT(url);
            alert("Deployed sucessfully...");
        } catch (error) {
            console.error(error);
        }
    };

   const mintNFT = async (_tokenURI) => {
        try {
            const data = await NFT_CONTRACT.mintTo(address, _tokenURI);
            await data.wait();
            console.info(data);
        } catch (error) {
            console.error("Contract call failure", error);
        }
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Upload your Creative Work</h1>
            <div className={styles.create_form}>
                <label htmlFor="">NFT Name</label>
                <input type="text" value={name} placeholder="Name for the NFT" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Upload NFT Image</label>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                <label htmlFor="">Description of your Creative Work</label>
                <textarea placeholder="Enter description for your creative work" className={styles.description} value={description} cols="100" onChange={(e) => setDescription(e.target.value)} />
                <button onClick={uploadMetadata} className={styles.btn}>Publish As NFT</button>
            </div>
        </div>
    );
}

export default Create;