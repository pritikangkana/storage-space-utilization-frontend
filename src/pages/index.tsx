import React, { useEffect, useState } from 'react';
import fetchStorageData from '../utils/fetchStorageData';

const HomePage: React.FC = () => {
    const [storageInfo, setStorageInfo] = useState({ totalSpace: 0, usedSpace: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStorageData().then(data => {
            setStorageInfo(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Storage Utilization</h1>
            <p>Total Space: {storageInfo.totalSpace} GB</p>
            <p>Used Space: {storageInfo.usedSpace} GB</p>
            <p>Available Space: {storageInfo.totalSpace - storageInfo.usedSpace} GB</p>
        </div>
    );
};

export default HomePage;