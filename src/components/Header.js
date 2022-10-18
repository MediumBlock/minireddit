import React, { useContext } from "react";
import { Context } from "../Context";



export default function Header() {

    const { handleSearchChange, searchData, handleSearchSubmit, width, breakpoint } = useContext(Context);


    return (
        <div className="header">
            <img src={require("../resources/logo.png")} />
            <h3>RedditMini</h3>
            <form onSubmit={handleSearchSubmit}
                className="search--form">
                <input type="text"
                    className={width > breakpoint ? "search" : "search search--responsive"}
                    placeholder="Search"
                    onChange={handleSearchChange}
                    value={searchData}
                />
                <button type="submit"
                    className="search--button"
                >
                    <img src={require("../resources/glass_icon.svg.png")} />
                </button>
            </form>
        </div>
    )
}