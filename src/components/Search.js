import React, {useState, useContext} from 'react'
import { Context } from '../Context'
import Tile from './Tile'

export default function Search() {

    const { apiData, mockApiData } = useContext(Context)


    const tileSearchElements = mockApiData.map(item => (
        <Tile
            key={item.data.id}
            img={item.data.url}
            title={item.data.title}
            id={item.data.id}
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