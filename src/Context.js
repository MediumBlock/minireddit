import React, { useState, useEffect } from "react"
import { mockData, mockCommentData } from "./resources/data"

const Context = React.createContext()

function ContextProvider({ children }) {

    const [apiData, setApiData] = useState([])
    const [commentData, setCommentData] = useState([])
    const [mockApiData, setMockApiData] = useState([])
    const [mockApiCommentData, setMockApiCommentData] = useState([])
    const [hasSearchTerm, setHasSeartchTerm] = useState(true)


    useEffect(() => {
        fetch('https://www.reddit.com/r/worldnews/hot.json')
            .then(res => res.json())
            .then(item => setApiData(item.data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [])

    useEffect(() => {
        fetch('https://www.reddit.com/r/worldnews/comments/y1ppwm.json')
            .then(res => res.json())
            .then(item => setCommentData(item[1].data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [])

    // console.log(apiData)
    console.log(commentData)

    useEffect(() => {
        setMockApiData(mockData)
    }, [])

    useEffect(() => {
        setMockApiCommentData(mockCommentData)
    }, [])




    return (
        <Context.Provider value={{
            apiData,
            mockApiData,
            mockApiCommentData,
            hasSearchTerm,
            setHasSeartchTerm
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }