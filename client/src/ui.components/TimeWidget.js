import React, { useState, useEffect } from 'react';

function TimeWidget() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div className="container-fluid pb-3 display-3 fw-bold">
            {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
        </div> 
    );
};

export default TimeWidget;