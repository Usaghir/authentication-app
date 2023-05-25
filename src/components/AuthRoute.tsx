import React, { useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface authRouteProps {
    children?: ReactNode;
}

const AuthRoute: React.FunctionComponent<authRouteProps> = (props) => {
    const { children } = props;

    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoafing] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoafing(false);
        } else {
            console.log('unauthorized');
            navigate('/login');
        }
    });

    if (loading) return <p>Loading ....</p>;

    return <>{children}</>;
};

export default AuthRoute;
