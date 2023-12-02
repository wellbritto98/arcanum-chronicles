import React, { useEffect, useState } from 'react';
import { spinnerService } from '../../Services/spinnerService.js';
import { Hourglass } from 'react-loader-spinner';

const GlobalSpinner = () => {
    const [isLoading, setIsLoading] = useState(spinnerService.isLoading);

    useEffect(() => {
        const unsubscribe = spinnerService.subscribe(setIsLoading);
        return unsubscribe;
    }, []);

    return isLoading ? (
        <div className="spinner-container">
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#ffc107', '#1a2245']}
            />
        </div>
    ) : null;
};

export default GlobalSpinner;

