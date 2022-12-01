import { Network, Alchemy } from "alchemy-sdk";
import { NFT_CONTRACT_ADDRESS } from "../constants";

const settings = {
    apiKey: "gKphJuDmAA0pE53_m70VW5fdljKjVVLj",
    network: Network.MATIC_MUMBAI,
}

import { useAccount, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { useState } from "react";

const alchemy = new Alchemy(settings);

export const Account = async () => {
    const { contract } = useContract("0xb6EC3aCfa7027Df9831661Ce392Fadd31615A75e");

    const { mutateAsync: createToken, isLoading } = useContractWrite(contract, "createToken");

    const { address, isConnected } = useAccount();
    const [nfts, setNfts] = useState([]);

    const fetchNFTs = async () => {
    try {
        console.log("fetching the NFTs");
        const nftsForOwner = await alchemy.nft.getNftsForOwner(address, { withMetadata: true, });

        const filteredNFTs = [];
        for (const nft of nftsForOwner.ownedNfts) {
            console.log("contract address: ", nft.contract.address);
            if(nft.contract.address == NFT_CONTRACT_ADDRESS) {
                filteredNFTs.push(nft);
            }
        }
        console.log(filteredNFTs);
        setNfts(filteredNFTs);
    } catch (error) {
        console.error(error);
    }
};
}

