import React, { useEffect, useState, useContext } from "react";
import TileList from "../components/TileList";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import { Context } from "../Context"

export default function Main() {

    const { apiData, hasSearchTerm } = useContext(Context)
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 760;



    return (
        <div>
            <Header />
            <Dropdown />
            <div className="content main">
                {hasSearchTerm ?
                    <Search /> :
                    <TileList />
                }
                <SideBar />
            </div>
        </div>
    )
}