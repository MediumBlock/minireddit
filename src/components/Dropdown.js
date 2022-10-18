import React, { useState, useContext } from "react";
import { Context } from "../Context";

export default function Dropdown() {
    const [subSelection, setSubSelection] = useState("")
    const { handleSubRedditChange } = useContext(Context);


    function handleChange(event) {
        console.log(event.target.value)
        setSubSelection(event.target.value)
        handleSubRedditChange(event)
    }

    return (

        <select
            id="subreddit"
            value={subSelection}
            onChange={handleChange}
            name="subreddit"
        >
            <option value="worldnews">worldnews</option>
            <option value="funny">funny</option>
            <option value="AskReddit">AskReddit</option>
            <option value="gaming">gaming</option>
            <option value="todayilearned">todayilearned</option>
            <option value="pics">pics</option>
            <option value="science">science</option>
            <option value="news">news</option>
            <option value="ShowerThoughts">ShowerThoughts</option>
            <option value="EarthPorn">EarthPorn</option>
            <option value="movies">movies</option>
            <option value="explainlikeimfive">explainlikeimfive</option>
            <option value="mildlyinteresting">mildlyinteresting</option>
            <option value="Jokes">Jokes</option>
            <option value="gadgets">gadgets</option>
        </select>

    )
}