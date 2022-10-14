import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";


export default function Comments({ id, subreddit }) {
    const [testCommentData, setTestCommentData] = useState([])

    console.log(id, subreddit)

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`)
            .then(res => res.json())
            .then(item => setTestCommentData(item[1].data.children))
            .catch((err) => {
                console.log('error error')
            });
    }, [])


    console.log(testCommentData)

    const commentsLog = testCommentData.map(comment => {
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
            {commentsLog}
        </div>
    )
}