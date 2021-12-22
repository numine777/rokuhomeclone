import React from "react";
import { Pannel, RokuPannel } from "./RokuPannel";

type Props = {
    panels: Pannel[];
};
export const DisplayGrid: React.FC<Props> = ({ panels }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                alignItems: "flex-end",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    fontSize: 24,
                    marginRight: 50,
                }}
            >
                <p>{panels.length} Items</p>
            </div>
            <div style={{ flexFlow: "wrap row" }}>
                {panels.map((pannel) => (
                    <RokuPannel pannel={pannel} />
                ))}
            </div>
        </div>
    );
};
