import React from "react";

type Props = {
    pannel: Pannel;
};

export type Pannel = {
    name: string;
    image: any;
};

export const RokuPannel: React.FC<Props> = ({ pannel }) => {
    return (
        <div
            style={{
                display: "inline-block",
                margin: 10,
                width: "30%",
                height: "40%",
            }}
        >
            <img
                src={pannel.image}
                style={{
                    width: 350,
                    height: 250,
                    objectFit: "cover",
                    objectPosition: "50% 10%",
                }}
            />
        </div>
    );
};
