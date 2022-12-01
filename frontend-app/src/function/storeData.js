import { Web3Storage } from "web3.storage";
import { WEB3_STORAGE_API } from "../constants";

function getAccessToken() {
    return WEB3_STORAGE_API;
}

function makeStorageClient(){
    return new Web3Storage({ token: getAccessToken() });
}

export const StoreData = async (files) => {
    const client = makeStorageClient();
    const cid = await client.put(files, {
        wrapWithDirectory: false,
    });

    console.log("stored files with cid:", cid);
    setTimeout(3000);
    return cid;
};