import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import ReactLoading from 'react-loading';


export default function Comments({ id, subreddit }) {
    const [testCommentData, setTestCommentData] = useState([])
    const [isLoading, setIsLoading] = useState([true])


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`)
            .then(res => res.json())
            .then(item => {
                setIsLoading(false)
                setTestCommentData(item[1].data.children)
            })

            .catch((err) => {
                console.log('error error')
            });
    }, [])




    const commentsLog = testCommentData.filter(item => {
        if (item.kind === "more") {
            return false;
        }
        return true;
    }).map(comment => {
        const commentId = comment.data.link_id.slice(3);
        if (commentId === id) {
            return (
                <div className="comments--element">
                    <h4>{comment.data.author}</h4>
                    <p>{comment.data.body}</p>
                </div>
            )
        }
        return
    })



    return (
        <div className="comments--section">
            {isLoading
                ? <ReactLoading type={"spokes"} color={"#f3f3f3"} height={'40'} width={'40'} className="loader" />
                : commentsLog
            }
        </div>
    )
}