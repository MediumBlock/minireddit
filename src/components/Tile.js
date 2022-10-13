import React, { useState, useContext } from "react";
import { Context } from "../Context"
import Comments from "./Comments";

export default function Tile({ img, title, id, comments, ups, author, date }) {

    const [isVoted, setIsVoted] = useState({
        up: false,
        down: false
    })

    const [checkComments, setCheckComments] = useState(false)
    
    const { mockApiData, mockApiCommentData } = useContext(Context)


    function toggleVote(vote) {
        if (!isVoted.up && !isVoted.down && vote === "upvote") {
            setIsVoted({ up: true, down: false })
        } else if (!isVoted.up && !isVoted.down && vote === "downvote") {
            setIsVoted({ up: false, down: true })
        } else if (vote === "upvote" && isVoted.up) {
            setIsVoted(prev => ({
                ...prev,
                up: false
            }))
        } else if (vote === "downvote" && isVoted.down) {
            setIsVoted(prev => ({
                ...prev,
                down: false
            }))
        } else if (vote === "upvote" && isVoted.down) {
            setIsVoted(prev => ({
                up: true,
                down: false
            }))
        } else if (vote === "downvote" && isVoted.up) {
            setIsVoted(prev => ({
                up: false,
                down: true
            }))
        }
    }

    function toggleComments() {
        setCheckComments(state => !state)
    }


    function convertTime() {
        const unixTimestamp = date
        const milliseconds = date * 1000
        const dateObject = new Date(milliseconds)
        
        return dateObject.toLocaleString()
    }


    return (
        <div className="tile">
            <div className="tile--divider">
                <div className="tile--left">
                    <img src={isVoted.up ? require("../resources/uparrowfilled.png") : require("../resources/uparrow.png")}
                        className="upvote"
                        onClick={() => toggleVote("upvote")}
                    />
                    <p>{ups}</p>
                    <img src={isVoted.down ? require("../resources/uparrowfilled.png") : require("../resources/uparrow.png")}
                        className="downvote"
                        onClick={() => toggleVote("downvote")}
                    />
                </div>
                <div className="tile--right">
                    <h3>{title}</h3>
                    <img src={img} />
                    <hr />
                    <div className="tile--footer">
                        <p>{author}</p>
                        <p>{convertTime()}</p>
                        <div className="tile--footer--comments">
                            <img src={require("../resources/comment.png")}
                                onClick={toggleComments}
                            />
                            <p>{comments}</p>
                        </div>
                    </div>
                    {checkComments ? <Comments id={id} /> : "" }
                </div>
            </div>

        </div>
    )
}