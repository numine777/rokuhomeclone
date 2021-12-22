import React from "react";
import logo from "../img/roku-logo.png";
import { OptionItem, OptionsMenu } from "./OptionsMenu";
import { RokuClock } from "./RokuClock";

type Props = {
    clock: boolean;
    options: OptionItem[];
    optionsEnabled: boolean;
};

export const Header: React.FC<Props> = ({ clock, options, optionsEnabled }) => {
    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: 50,
            }}
        >
            <img src={logo} style={{ height: "8vh" }} />
            <div
                style={{
                    display: "inline-flex",
                    width: "30%",
                    alignItems: "center",
                }}
            >
                {clock && <RokuClock />}
                {clock && <span style={{borderLeft: "6px solid grey",}}/>}
                <OptionsMenu
                    options={options}
                    optionsEnabled={optionsEnabled}
                />
            </div>
        </div>
    );
};
