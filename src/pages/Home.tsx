import React from 'react';
import { getAuth, signOut,  } from 'firebase/auth';


export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {

const auth = getAuth();

    return (
        <div>
            <p>Home page (Protected by Firebase)</p>
            <button onClick={() => signOut(auth)} >
                Sign out
            </button>
        </div>
    );
};

export default HomePage;
