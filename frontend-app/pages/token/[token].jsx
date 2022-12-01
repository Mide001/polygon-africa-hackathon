import React, { useState, useEffect } from "react";
import { NFT_CONTRACT_ADDRESS, TOKEN_ABI } from "../../src/constants";
import { isAddress } from "ethers/lib/utils";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import image from "../../src/assets/3.png";
import Image from "next/image";


function Token(props) {
    
    const [tokenAddress, setTokenAddress] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [amount, setAmount] = useState("");
    const [data, setData] = useState({});
    const router = useRouter();
    const _tokenAddress = router.query.tokenContract;
    const { address, isConnected } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();

    const TOKEN_CONTRACT = useContract({
        addressOrName: tokenAddress,
        contractInterface: TOKEN_ABI,
        signerOrProvider: signer || provider,
    });

    useEffect(async () => {
        if(_tokenAddress) {
            setTokenAddress(_tokenAddress);
            await fetchTokenData(_tokenAddress);
        }
    }, []);

    useEffect(async() => {
        setAmount(qty * tokenPrice);
    }, [qty]);
    
    const fetchTokenData = async ({ _tokenAddress }) => {
        try {
            const data = await TOKEN_CONTRACT.tokenId();
            const tokenId = parseInt(data.hex._value);
            console.log(response);

            const _price = await TOKEN_CONTRACT.tokenPrice();
            const price = parseInt(_price.hex._value);
            setTokenPrice(price);

            const metadata = await fetch(tokenURL);
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
            const tx = await TOKEN_CONTRACT.buyToken(qty, {
                value: ethers.utils.parseEther(amount),
            });
            await tx.wait();
            console.log("Tokens bought");
        } catch (error){
            console.log(error);
        }
    };


    return(
        <div className={styles.nft_page}>
            <h1 className={styles.heading}>Token Title Here</h1>
            <div className={styles.nft_section}>
                <div className={styles.img}>
                    <Image className={styles.img} src={image} />
                </div>
                <div className={styles.right}>
                    <h2>NFT and Token Description</h2>
                    <h4 className={styles.nft_desc}>
                        {props.desc}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                        nobis, tempora deleniti itaque provident, corrupti explicabo veniam
                    </h4>

                    <div className={styles.buy}>
                        <h3>Purchase Token</h3>
                        <label htmlFor="">Enter amount of your choice</label>
                        <input type="number" />
                        <label htmlFor="">You will receive {props.token} 20 Tokens</label>
                        <hr className={styles.hr} />
                        <button className={`${styles.btn} ${styles.center}`}>Get Tokens</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Token;