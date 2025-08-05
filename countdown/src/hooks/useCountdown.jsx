import { useState } from 'react';

const useCountdown = (targetDate) => {
    const [ days, setDays ] = useState(0);
    const [ hours, setHours ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);

    const calculateTimeLeft = () => {
        const countdownDate = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const interval = countdownDate - now;

        const seconds = Math.floor((interval % (1000 * 60)) / 1000);
        const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(interval / (1000 * 60 * 60 * 24));

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    // Initial calculation
    setInterval(calculateTimeLeft, 1000);

    return { days, hours, minutes, seconds };

};

export default useCountdown;
