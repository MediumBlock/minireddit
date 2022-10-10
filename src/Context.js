import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://www.reddit.com/r/javascript/hot.json')
            .then(res => res.json())
            .then(item => setApiData(item.data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [])

    console.log(apiData)

    return (
        <Context.Provider value={{
            apiData
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }