import React, { useState, useContext } from "react";
import Tile from "./Tile";
import { Context } from "../Context"
import { mockData } from "../resources/data"


export default function TileList() {

    const { apiData } = useContext(Context)

    // const tileItemElements = apiData.map(item => ())

    const tileItemElements = mockData.map(item => (
        <Tile
            key={item.data.title + 1}
            img={item.data.url}
            title={item.data.title}
        />
    ))

    console.log(apiData)

    return (
        <>
            <div className="tilelist">
                {tileItemElements}

            </div>
        </>

    )
}