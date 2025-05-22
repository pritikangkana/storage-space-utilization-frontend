export const apiBaseUrl = 'http://localhost:5000/api';

export const fetchStorageInfo = async () => {
    const response = await fetch(`${apiBaseUrl}/storage`);
    if (!response.ok) {
        throw new Error('Failed to fetch storage information');
    }
    return response.json();
};

export const updateStorageInfo = async (data: { totalSpace: number; usedSpace: number }) => {
    const response = await fetch(`${apiBaseUrl}/storage`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update storage information');
    }
    return response.json();
};