import { useState, useEffect } from "react";
import {projectStorage} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url, setUrl] =  useState(null);
    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_change',snap=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },err=>{
            setError(err)
        },async ()=>{
            const uri = await storageRef.getDownloadURL();
            setUrl(uri);
        })
    },[file]);

    return {progress,error,url}
}

export default useStorage;