import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import YourNFT from "../src/components/YourNFT";
import { Network, Alchemy } from "alchemy-sdk";
import { NFT_CREATE_ADDRESS } from "../src/constants";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";

const settings = {
    apiKey: "gKphJuDmAA0pE53_m70VW5fdljKjVVLj",
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);


export default function Account() {

    const { address, isConnected } = useAccount();
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        fetchNFTs();
    }, []);

    const fetchNFTs = async () => {
        try {
            console.log("fetching the NFTs");
            const nftsForOwner = await alchemy.nft.getNftsForOwner(address, {
                withMetadata: true,
            });

            const filteredNFTs = [];
            for (const nft of nftsForOwner.ownedNfts) {
                if(nft.contract.address.toLowerCase() == NFT_CREATE_ADDRESS.toLowerCase()) {
                    console.log(nft);
                    filteredNFTs.push(nft);
                }
            }
            console.log(filteredNFTs);
            setNfts(filteredNFTs);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Owned NFTs</h1>
            <div className={styles.collection}>
                {nfts.map((nft) => {
                    return <YourNFT nft={nft} key={nft.tokenId} />;
                })}
            </div>
        </div>
    );
}
