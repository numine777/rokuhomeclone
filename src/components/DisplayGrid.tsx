import React from "react";
import { FadeInSection } from "./FadeInSection";
import { Pannel, RokuPannel } from "./RokuPannel";
import "../styles/DisplayGrid.css";

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
                <p>{panels.length} Items</p>
            </div>
            <div className="fading-grid">
                <FadeInSection>
                    {panels.map((pannel) => (
                        <RokuPannel pannel={pannel} />
                    ))}
                </FadeInSection>
            </div>
        </div>
    );
};
