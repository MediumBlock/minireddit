import React, { useState, useContext } from "react";
import Tile from "./Tile";
import { Context } from "../Context"


export default function TileList() {

    const { apiData, mockApiData } = useContext(Context)

    // const tileItemElements = apiData.map(item => ())

    const tileItemElements = mockApiData.map(item => (
        <Tile
            key={item.data.id}
            img={item.data.url}
            title={item.data.title}
            id={item.data.id}
        />
    ))


    return (
        <>
            <div className="tilelist">
                {tileItemElements}

            </div>
        </>

    )
}