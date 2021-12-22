import React from "react";

export const RokuClock = (props: {}) => {
    const [time, setTime] = React.useState(new Date());
    const [displayTime, setDisplayTime] = React.useState("");

    React.useEffect(() => {
        setInterval(() => {
            const newTime = new Date();
            setTime(newTime);
        }, 6000);
    }, []);

    React.useEffect(() => {
        const newDisplayTime = time
            .toLocaleTimeString([], { hour: "numeric", minute: "numeric" })
            .toLowerCase();
        setDisplayTime(newDisplayTime);
    }, [time]);

    return (
        <div
            style={{
                display: "inline-flex",
                color: "#ffffff",
                fontSize: 36,
                width: "10vw",
                justifyContent: "center",
            }}
        >
            <p>{displayTime}</p>
        </div>
    );
};
