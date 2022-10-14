import React, { useContext } from "react";
import { Context } from "../Context";

export default function SideBar() {

    const {handleSubRedditChange} = useContext(Context);

    return (
        <div className="sidebar">
            <button value="worldnews"
                onClick={handleSubRedditChange}
            >
                worldnews
            </button>
            <button value="funny"
                onClick={handleSubRedditChange}
            >
                funny
            </button >

        </div >
    )
}