import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    // Formata a hora no formato HH:MM
    const formattedTime = time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    return <div>{formattedTime}</div>;
};

export default Clock;
