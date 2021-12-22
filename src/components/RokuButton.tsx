import React, { CSSProperties } from "react";

type Props = {
    onClick: () => void;
    title: string;
    enabled: boolean;
    style?: CSSProperties;
};

export const RokuButton: React.FC<Props> = ({
    onClick,
    title,
    style,
    enabled,
}) => {
    const [hover, setHover] = React.useState(false);
    const baseStyle = {
        width: "100%",
        height: "100%",
        fontSize: 36,
        fontWeight: "bold",
        border: "none",
        background: hover ? "#ffffff" : "inherit",
        color: hover ? "inherit" : "#ffffff",
        borderRadius: 8,
    };

    const disabledStyle = enabled
        ? {}
        : {
              color: "#808080",
          };

    const buttonStyle = { ...baseStyle, ...disabledStyle, ...style };

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
            style={{ ...buttonStyle, ...style }}
            disabled={!enabled}
        >
            {title}
        </button>
    );
};
