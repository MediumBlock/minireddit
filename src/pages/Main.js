import React, { useEffect, useState, useContext } from "react";
import TileList from "../components/TileList";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import { Context } from "../Context"

export default function Main() {

    const { apiData, hasSearchTerm, width, breakpoint } = useContext(Context)




    return (
        <div>
            <Header />
            {width < breakpoint && <Dropdown />}
            <div className="content main">
                {hasSearchTerm ?
                    <Search /> :
                    <TileList />
                }
                {width > breakpoint && <SideBar />}
            </div>
        </div>
    )
}