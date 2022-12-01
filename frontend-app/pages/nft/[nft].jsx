import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import image from "../../src/assets/3.png";
import Image from "next/image";
import { useAccount, useProvider, useSigner, useContract } from "wagmi";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { TOKEN_ABI } from "../../src/constants";

function NFT(props) {
    const [tokenAddress, setTokenAddress] = useState("");
    const [nftPrice, setNftPrice] = useState(0)
    const [price, setPrice] = useState("");
    const [data, setData] = useState({});



    const router = useRouter();
    const nftAddress = router.query.nftContract;
    const tokenId = router.query.tokenId;


    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const TOKEN_CONTRACT = useContract({
        addressOrName: tokenAddress,
        contractInterface: TOKEN_ABI,
        signerOrProvider: signer || provider,
    });

    const FetchTokenData = async ({ _tokenAddress }) => {
        try {
            setTokenAddress(address);

            console.log(response);

            const metadata = await fetch(tokenURI);
            const metadataJSON = await metadata.json();
            console.log(metadataJSON);
            setData(metadataJSON);

            const _price = await TOKEN_CONTRACT.salePrice();
            const price = await parseInt(_price.hex._value);
            setNftPrice(price);
        } catch (error) {
            console.error(error);
        }
    };

    const BuyNFT = async () => {
        try {
            console.log("Buying NFT...");
            const tx = await TOKEN_CONTRACT.purchaseNFT({
                value: ethers.utils.parseEther(price),
            });

            await tx.wait();
            console.log("NFT purchase complete");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.nft_page}>
            <h1 className={styles.heading}>NFT Title Here</h1>
            <div className={styles.nft_section}>
                <div className={styles.img}>
                    <Image className={styles.img} src={image} />
                </div>
                <div className={styles.right}>
                    <h2>NFT Description</h2>
                    <h4 className={styles.nft_desc}>
                        {props.desc}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                        nobis, tempora deleniti itaque provident, corrupti explicabo veniam
                    </h4>

                    <div className={styles.buy}>
                        <h3>Purchase NFT</h3>
                        <label htmlFor="">You Pay</label>
                        <input type="number" />
                        <label htmlFor="">You Recieve</label>
                        <input type="number" />
                        <h4 htmlFor="">Estimated Gas + Fees = $ 0.235 {props.gasfee}</h4>
                        <hr className={styles.hr} />
                            <button className={`${styles.btn} ${styles.center}`}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NFT;