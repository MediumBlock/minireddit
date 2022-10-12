import React, { useState, useContext } from "react";
import { Context } from "../Context";


export default function Comments({ id }) {
    const { mockApiData, mockApiCommentData } = useContext(Context)


    console.log(mockApiCommentData)

    const commentsLog = mockApiCommentData.map(comment => {
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