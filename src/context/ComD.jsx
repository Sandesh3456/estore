import React, { useContext } from 'react';
import { Global } from './Globalcontext';

const ComD = () => {
    const data = useContext(Global);
    console.log(data)
    return (
        <>
            <h1>
                <div>We are learning {data}</div>
            </h1>
        </>
    );
};

export default ComD;
