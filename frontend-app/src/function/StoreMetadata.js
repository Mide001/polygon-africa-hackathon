import { NFTStorage } from "nft.storage";
import { NFT_STORAGE_API } from "../constants";


export const StoreMetadata = async (image, Name, Description) => {
    console.log("Preparing Metadata...");

    const nft = {
        image: image,
        name: Name,
        description: Description,
    };

    console.log("Uploading Metadata to IPFS ....");
    const client = new NFTStorage({ token: NFT_STORAGE_API });
    const metadata = await client.store(nft);
    console.log(metadata);
    console.log("Nft data stored successfully 🚀🚀");
    console.log("Metadata URI: ", metadata.url);

    return metadata;
}