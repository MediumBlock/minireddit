import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import Tile from './Tile'

export default function Search() {

    const { apiData, submitData } = useContext(Context)

    const filterElements = apiData.filter(item => {
        return item.data.title.toLowerCase().includes(submitData.toLowerCase())
    })

    const tileSearchElements = filterElements.map(item => (
        <Tile
            key={item.data.id}
            img={item.data.thumbnail}
            fulldata={item.data || ""}
            title={item.data.title}
            id={item.data.id}
            comments={item.data.num_comments}
            ups={item.data.ups}
            author={item.data.author}
            date={item.data.created}
            subreddit={item.data.subreddit}

/>
    ))


return (
    <>
        <div className="tilelist">
            {tileSearchElements}
        </div>
    </>

)
}