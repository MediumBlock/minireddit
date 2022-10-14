import React from "react";

export default function SideBar() {


    function handleChange(event) {
        console.log(event.target.value)
    }

    return (
        <div className="sidebar">
            <button value="worldnews"
                onClick={handleChange}
            >
                worldnews
            </button>
            <button value="funny"
                onClick={handleChange}
            >
                funny
            </button >

        </div >
    )
}