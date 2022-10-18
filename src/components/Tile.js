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
    const [postTime, setPostTime] = useState({ days: "", hours: "" })
    const { subReddit, isApiLoading, width, breakpoint } = useContext(Context)



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
            } else if (fulldata.media.type === "gfycat.com") {
                setPostImage({ img: fulldata.media.oembed.thumbail_url })
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



    useEffect(() => {
        const unixTimestamp = date
        const milliseconds = date * 1000
        const postTime = new Date(milliseconds)
        const timeNow = new Date()
        const timeDiff = timeNow.getTime() - postTime.getTime();
        const difference_in_days = timeDiff / (1000 * 3600 * 24)
        if (difference_in_days > 2) {
            setPostTime({ days: Math.ceil(difference_in_days) })
        } else if (difference_in_days < 2) {
            setPostTime({ hours: Math.ceil(difference_in_days * 24) })
        }

    }, [])


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
                        <p className="selftext">{fulldata.selftext}</p>
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
                            <p>{postTime.days ? postTime.days + " days ago" : postTime.hours + " hours ago"}</p>
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