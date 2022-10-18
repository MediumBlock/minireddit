import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context"
import Comments from "./Comments";
import ReactLoading from 'react-loading';


export default function Tile({ img, title, id, comments, ups, author, date, subreddit, fulldata }) {

    const [isVoted, setIsVoted] = useState({
        up: false,
        down: false
    })

    const [checkComments, setCheckComments] = useState(false)
    const [postImage, setPostImage] = useState({ media: "", img: "", redditVid: "", youtubeVid: "" })
    const { subReddit, isApiLoading } = useContext(Context)



    useEffect(() => {
        if (fulldata.media_metadata) {
            let media = fulldata.media_metadata
            let firstKey = Object.values(media)[0].id
            setPostImage({ media: firstKey })
        } else if (fulldata.url[8] === 'i') {
            setPostImage({ img: fulldata.url })
        } else if (fulldata.media) {
            if (fulldata.media.type === "liveupdate") {
                return
            }
            if (fulldata.media.type === "youtube.com") {
                setPostImage({ youtubeVid: fulldata.media.oembed.thumbnail_url })
            } else if (fulldata.media.reddit_video.fallback_url) {
                setPostImage({ redditVid: fulldata.media.reddit_video.fallback_url })

            }
        }


    }, [subReddit])



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
            {isApiLoading
                ?
                <ReactLoading type={"spokes"} color={"#f3f3f3"} height={'40'} width={'40'} className="loader" />
                :
                <div className="tile--divider">
                    <div className="tile--left">
                        <img src={isVoted.up ? require("../resources/uparrowfilled.png") : require("../resources/uparrow.png")}
                            className="upvote"
                            onClick={() => toggleVote("upvote")}
                        />
                        <p className="upvote--counter">{ups}</p>
                        <img src={isVoted.down ? require("../resources/uparrowfilled.png") : require("../resources/uparrow.png")}
                            className="downvote"
                            onClick={() => toggleVote("downvote")}
                        />
                    </div>
                    <div className="tile--right">
                        <h3>{title}</h3>
                        {postImage.media && <img src={`https://i.redd.it/${postImage.media}.jpg`} />}
                        {postImage.img && <img src={postImage.img} />}
                        {postImage.redditVid && <iframe
                            src={postImage.redditVid}
                            frameborder="0"
                            allowfullscreen
                            title="video"

                        />}
                        {postImage.youtubeVid && <img src={postImage.youtubeVid} />}
                        <hr />
                        {checkComments && <Comments id={id} subreddit={subreddit} />}
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
                    </div>
                </div>
            }
        </div>
    )
}