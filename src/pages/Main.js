import React, { useEffect, useState, useContext } from "react";
import TileList from "../components/TileList";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import Search from "../components/Search";
import { Context } from "../Context"

export default function Main() {

    const { apiData, hasSearchTerm } = useContext(Context)




    return (
        <div>
            <Header />
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