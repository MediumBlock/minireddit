import React from "react";

export default function Header() {


    return (
        <div className="header">
            <img src={require("../resources/logo.png")} />
            <h3>RedditMini</h3>
            <form onSubmit={"nothing"} className="search-form">
                <input type="text" className="search" placeholder="Search" /*ref={searchInputRef}*/ />
                <button type="submit" className="search-button">
                    <img src={require("../resources/glass_icon.svg.png")} />
                </button>
            </form>
        </div>
    )
}