import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const UserComponent: React.FC = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // lub jakiś placeholder
    }

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h2>Welcome, {user?.username}</h2>
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default UserComponent;