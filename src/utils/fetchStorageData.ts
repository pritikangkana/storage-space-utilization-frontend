const fetchStorageData = async (): Promise<{ totalSpace: number; usedSpace: number }> => {
    const response = await fetch('http://localhost:3001/api/storage');
    if (!response.ok) {
        throw new Error('Failed to fetch storage data');
    }
    return response.json();
};

export default fetchStorageData;