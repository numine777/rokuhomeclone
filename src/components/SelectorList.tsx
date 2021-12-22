import React from "react";
import { RokuButton } from "./RokuButton";

type Props = {
    selector: (index: number) => void;
    selected: number;
};
export const SelectorList: React.FC<Props> = ({ selector, selected }) => {
    const screens = [
        "Home",
        "Featured Free",
        "My Feed",
        "Search",
        "Streaming Channels",
        "Settings",
    ];
    return (
        <div style={{ padding: 50 }}>
            <ol>
                {screens.map((screen, idx) => (
                    <div style={{ marginBottom: 10, width: "100%" }}>
                        <RokuButton
                            key={idx}
                            onClick={() => selector(idx)}
                            title={screen}
                            style={{
                                textAlign: "left",
                                background:
                                    idx === selected ? "#ffffff" : "inherit",
                                color: idx === selected ? "inherit" : "#ffffff",
                            }}
                            enabled
                        />
                    </div>
                ))}
            </ol>
        </div>
    );
};
