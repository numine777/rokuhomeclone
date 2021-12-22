import React from "react";
import { RokuButton } from "./RokuButton";

type Props = {
    options: OptionItem[];
    optionsEnabled: boolean;
};

export type OptionItem = {
    id: string;
    title: string;
};

export const OptionsMenu: React.FC<Props> = ({ options, optionsEnabled }) => {
    const [isOpen, setOpen] = React.useState(false);
    const click = () => console.log("button clicked");
    const openMenu = () => (isOpen ? setOpen(false) : setOpen(true));

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            <RokuButton
                onClick={openMenu}
                title="Options"
                style={{
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: "normal",
                }}
                enabled={optionsEnabled}
            />
            <div
                style={{ position: "absolute", zIndex: 10, textAlign: "left" }}
            >
                {isOpen &&
                    options.map((item) => (
                        <RokuButton
                            key={item.id}
                            onClick={click}
                            title={item.title}
                            style={{
                                display: "inline-block",
                                textAlign: "right",
                            }}
                            enabled={true}
                        />
                    ))}
            </div>
        </div>
    );
};
