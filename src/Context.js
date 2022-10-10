import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {

    const [apiData, setApiData] = useState({})
    const [test, setTest] = useState("1")

    useEffect(() => {
        fetch('https://www.reddit.com/r/javascript/hot.json')
            .then(res => res.json())
            .then(item => setApiData(item.data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [])

    return (
        <Context.Provider value={{
            apiData,
            test
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }