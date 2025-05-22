import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './index';

const fetchFiles = async (dirPath: string) => {
    const response = await fetch(`http://localhost:3001/api/files?path=${encodeURIComponent(dirPath)}`);
    if (!response.ok) throw new Error('Failed to fetch files');
    return response.json();
};

const FileManager: React.FC = () => {
    const [files, setFiles] = useState<any[]>([]);
    const [currentPath, setCurrentPath] = useState('C:\\');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchFiles(currentPath)
            .then(setFiles)
            .finally(() => setLoading(false));
    }, [currentPath]);

    const goUp = () => {
        const parts = currentPath.split(/[\\/]/).filter(Boolean);
        if (parts.length > 1) {
            setCurrentPath(currentPath.slice(0, currentPath.lastIndexOf(parts[parts.length - 1]) - 1));
        } else {
            setCurrentPath('C:\\');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>File Manager - {currentPath}</h2>
            <button onClick={goUp} disabled={currentPath === 'C:\\'}>Up</button>
            <ul>
                {files.map(file => (
                    <li key={file.path}>
                        {file.isDirectory ? (
                            <button onClick={() => setCurrentPath(file.path)}>
                                📁 {file.name}
                            </button>
                        ) : (
                            <span>📄 {file.name} ({file.size ?? 'unknown'} bytes)</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/files" element={<FileManager />} />
    </Routes>
);

export default App;