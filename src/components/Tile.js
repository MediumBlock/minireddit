import React, {useContext} from "react";
import {Context} from "../Context"
import { mockData } from "../resources/data";

export default function Tile({img, title}) {
    return (
        <div className="tile">
            <p>{title}</p>
            <img src={img} />
        </div>
    )
}