import React, { useContext } from "react";
import { Context } from "../Context"
import { mockData } from "../resources/data";

export default function Tile({ img, title }) {
    return (
        <div className="tile">
            <div className="tile--divider">
                <div className="tile--left">
                    <p>hello</p>
                </div>
                <div className="tile--right">
                    <p>{title}</p>
                    <img src={img} />
                    <div className="tile--footer">
                        <p>harro</p>
                    </div>
                </div>
            </div>

        </div>
    )
}