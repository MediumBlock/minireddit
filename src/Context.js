import React, { useState, useEffect } from "react"
import { mockData, mockCommentData } from "./resources/data"

const Context = React.createContext()

function ContextProvider({ children }) {

    const [apiData, setApiData] = useState([])
    const [commentData, setCommentData] = useState([])
    const [mockApiData, setMockApiData] = useState([])
    const [mockApiCommentData, setMockApiCommentData] = useState([])
    const [hasSearchTerm, setHasSeartchTerm] = useState(false)
    const [searchData, setSearchData] = useState("")
    const [submitData, setSubmitData] = useState("")
    const [subReddit, setSubReddit] = useState("Home")


    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subReddit}/hot.json`)
            .then(res => res.json())
            .then(item => setApiData(item.data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [subReddit])

    

    console.log('apidata', apiData)



    function handleSearchChange(event) {
        const { value } = event.target
        setSearchData(value)
    }

    function handleSearchSubmit(event) {
        event.preventDefault()
        setSubmitData(searchData)

    }

    function handleSubRedditChange(event) {
        setSubReddit(event.target.value)
    }

    console.log('subreddit', subReddit)

    return (
        <Context.Provider value={{
            apiData,
            mockApiData,
            mockApiCommentData,
            hasSearchTerm,
            setHasSeartchTerm,
            handleSearchChange,
            searchData,
            handleSearchSubmit,
            submitData,
            handleSubRedditChange
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }