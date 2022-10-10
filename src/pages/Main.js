import React, { useEffect, useState, useContext } from "react";
import TileList from "../components/TileList";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import {Context} from "../Context"

export default function Main() {

    const {apiData, test} = useContext(Context)

    console.log(test)

    function mapArray() {
        // return apiData.map(item => item.data.title)
    }


    return (
        <div>
            <Header />
            <div className="content main">
                <TileList />
                <SideBar />
            </div>
            {mapArray()}
        </div>
    )
}