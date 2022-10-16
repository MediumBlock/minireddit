import React, { useState, useContext } from "react";
import Tile from "./Tile";
import { Context } from "../Context"


export default function TileList() {

    const { apiData } = useContext(Context)

    // const tileItemElements = apiData.map(item => ())

    const tileItemElements = apiData.map(item => (
        <Tile
            key={item.data.id}
            img={item.data.thumbnail}
            fulldata={item.data|| "" }
            title={item.data.title}
            id={item.data.id}
            comments={item.data.num_comments}
            ups={item.data.ups}
            author={item.data.author}
            date={item.data.created}
            subreddit={item.data.subreddit}

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