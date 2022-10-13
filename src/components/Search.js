import React, {useState, useContext} from 'react'
import { Context } from '../Context'
import Tile from './Tile'

export default function Search() {

    const { apiData, mockApiData, submitData} = useContext(Context)

    const filterElements = mockApiData.filter(item => {
        return item.data.title.includes(submitData)
    })

    const tileSearchElements = filterElements.map(item => (
        <Tile
            key={item.data.id}
            img={item.data.url}
            title={item.data.title}
            id={item.data.id}
            comments={item.data.num_comments}
            ups={item.data.ups}
            author={item.data.author}
            date={item.data.created}

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