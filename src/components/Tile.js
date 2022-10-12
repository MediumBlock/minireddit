import React, { useState, useContext } from "react";
import { Context } from "../Context"
import Comments from "./Comments";

export default function Tile({ img, title, id }) {

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



    return (
        <div className="tile">
            <div className="tile--divider">
                <div className="tile--left">
                    <img src={isVoted.up ? require("../resources/uparrowfilled.png") : require("../resources/uparrow.png")}
                        className="upvote"
                        onClick={() => toggleVote("upvote")}
                    />
                    <p>500</p>
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
                        <p>name</p>
                        <p>time</p>
                        <div className="tile--footer--comments">
                            <img src={require("../resources/comment.png")}
                                onClick={toggleComments}
                            />
                            <p>400</p>
                        </div>
                    </div>
                    {checkComments ? <Comments id={id} /> : "" }
                    {/* {checkComments ? {commentsLog} : "" } */}
                </div>
            </div>

        </div>
    )
}