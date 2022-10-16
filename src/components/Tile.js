import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context"
import Comments from "./Comments";

export default function Tile({ img, title, id, comments, ups, author, date, subreddit, fulldata }) {

    const [isVoted, setIsVoted] = useState({
        up: false,
        down: false
    })

    const [checkComments, setCheckComments] = useState(false)
    const [postImage, setPostImage] = useState({ media: "", img: "", redditVid: "", youtubeVid: ""})
    const { subReddit } = useContext(Context)



    useEffect(() => {
        if (fulldata.media_metadata) {
            let media = fulldata.media_metadata
            let firstKey = Object.values(media)[0].id
            setPostImage({ media: firstKey })
        } else if (fulldata.url[8] === 'i') {
            console.log(fulldata.url[8])
            setPostImage({ img: fulldata.url })
            console.log(fulldata.url)
        } else if (fulldata.media) {
            if (fulldata.media.type === "youtube.com") {
                let youtubeIframe = fulldata.media_embed.content;
                let conversion = youtubeIframe.replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                console.log(conversion)
                // setPostImage({youtubeVid: fulldata.media_embed.content})
                setPostImage({youtubeVid: conversion})
            } else if (fulldata.media.reddit_video.fallback_url) {
                console.log(fulldata.media.reddit_video.fallback_url)
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
                    {postImage.media && <img src={`https://i.redd.it/${postImage.media}.jpg`} />}
                    {postImage.img && <img src={postImage.img} />}
                    {postImage.redditVid && <iframe
                        src="https://v.redd.it/4s4mly5nxyt91/DASH_1080.mp4?source=fallback"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />}
                    {postImage.youtubeVid && <iframe width="800" height="800" src="https://www.youtube.com/embed/k8erOIgkw_M?feature=oembed&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Solar Flyover"></iframe>}
                    {postImage.youtubeVid && <iframe src="https://www.youtube.com/embed/k8erOIgkw_M?feature=oembed&enablejsapi=1"></iframe>}
                    {postImage.youtubeVid}
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
                    {checkComments ? <Comments id={id} subreddit={subreddit} /> : ""}
                </div>
            </div>

        </div>
    )
}