import React, { useContext } from "react";
import { Context } from "../Context";

export default function SideBar() {

    const { handleSubRedditChange } = useContext(Context);

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
            <button value="AskReddit"
                onClick={handleSubRedditChange}
            >
                AskReddit
            </button >
            <button value="gaming"
                onClick={handleSubRedditChange}
            >
                gaming
            </button >
            <button value="todayilearned"
                onClick={handleSubRedditChange}
            >
                todayilearned
            </button >
            <button value="pics"
                onClick={handleSubRedditChange}
            >
                pics
            </button >
            <button value="science"
                onClick={handleSubRedditChange}
            >
                science
            </button >
            <button value="news"
                onClick={handleSubRedditChange}
            >
                news
            </button >
            <button value="Showerthoughts"
                onClick={handleSubRedditChange}
            >
                Showerthoughts
            </button >
            <button value="EarthPorn"
                onClick={handleSubRedditChange}
            >
                EarthPorn
            </button >
            <button value="movies"
                onClick={handleSubRedditChange}
            >
                movies
            </button >
            <button value="explainlikeimfive"
                onClick={handleSubRedditChange}
            >
                explainlikeimfive
            </button >
            <button value="mildlyinteresting"
                onClick={handleSubRedditChange}
            >
                mildlyinteresting
            </button >
            <button value="Jokes"
                onClick={handleSubRedditChange}
            >
                Jokes
            </button >
            <button value="gadgets"
                onClick={handleSubRedditChange}
            >
                gadgets
            </button >
        </div >
    )
}