import React from "react";
import { FadeInSection } from "./FadeInSection";
import { Pannel, RokuPannel } from "./RokuPannel";
import "../styles/DisplayGrid.css";

type Props = {
    pannels: Pannel[];
};

export const DisplayGrid: React.FC<Props> = ({ pannels }) => {
    const rows = [];
    let i = 3;
    do {
        let row = pannels.slice(i - 3, i);
        rows.push(row);
        i +=3;
    } while (i < pannels.length + 3);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                alignItems: "flex-end",
                height: "100%",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    fontSize: 24,
                    marginRight: 50,
                }}
            >
                <p>{pannels.length} Items</p>
            </div>
            <div className="fading-grid">
                {rows.map((row) =>
                    <FadeInSection>
                        {row.map((pannel) => (
                            <RokuPannel pannel={pannel} />
                        ))}
                    </FadeInSection>
                )}
            </div>
        </div>
    );
};
