import React from "react";
import { DisplayGrid } from "../components/DisplayGrid";
import { Header } from "../components/Header";
import { SelectorList } from "../components/SelectorList";
import background from "../img/roku-background.png";
import netflix from "../img/netflix.jpg";
import disneyPlus from "../img/disneyplus.jpg";
import appleTv from "../img/Apple-TV-logo.jpg";
import hulu from "../img/hulu.jpg";
import discoveryPlus from "../img/discoverypluslogo.jpg";
import rokuChannel from "../img/rokuchannel.png";

type Props = {};

export const HomeScreen = () => {
    const [hasOptions, setHasOptions] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const options = [
        { id: "1", title: "this" },
        { id: "2", title: "is" },
        { id: "3", title: "in" },
        { id: "4", title: "progress" },
    ];
    const grids = [
        [
            {name: "Netflix", image: netflix},
            {name: "Disney+", image: disneyPlus},
            {name: "AppleTV", image: appleTv},
            {name: "Hulu", image: hulu},
            {name: "Discovery+", image: discoveryPlus},
            {name: "Roku Channel", image: rokuChannel},
        ],
    ];
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                overflow: "hidden",
                position: "fixed",
                padding: 0,
                margin: 0,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }}
        >
            <Header
                clock={true}
                optionsEnabled={hasOptions}
                options={options}
            />
            <div style={{ display: "inline-flex", padding: 50, width: "100%" }}>
                <SelectorList selector={setSelected} selected={selected} />
                <DisplayGrid panels={grids[0]} />
            </div>
        </div>
    );
};
