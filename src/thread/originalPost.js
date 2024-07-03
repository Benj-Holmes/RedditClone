import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { originalPostSelector } from "../slices/threadSlice";
import './thread.css';
import icon from '../imgs/rlogo.png'
import comments from '../imgs/comment.png';
import arrow from '../imgs/arrow.png';

export const OriginalPost = () => {
    const op = useSelector(originalPostSelector);
    const downvotes = parseInt(op.ups - (op.ups * op.upvote_ratio));
    const [differenceInHours, setDifferenceInHours] = useState(null);
    console.log(op.created);

    useEffect(() => {
        const unixTimestamp = op.created;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const hoursDifference = Math.floor((currentTimestamp - unixTimestamp) / 3000);
        setDifferenceInHours(hoursDifference.toString());
    }, op.created);

    return (
        <div>
            <div className='topOP'>
                <img className='rIcon' src={icon} />
                <div className="infoOP">
                    <p className="location"> From {op.subreddit_name_prefixed}</p>
                    <p className="author">Posted by u/{op.author}</p>
                </div>
                <p className="timeOP"> {differenceInHours} Hrs Ago </p>
            </div> 
            <div className="mainOP">
                <div className="textOP">
                    <p className="postTitle">{op.title}</p>
                    <p className="postText">{op.selftext}</p>
                </div>
                {(op.thumbnail != null && op.thumbnail != 'self') ? <img className='opThumbnail' src={op.thumbnail} /> : '' }
            </div>
            <div className='postBottom'>
                            <div className='upvotes'>
                                <img src={arrow} className='bottomIcon'/>
                                <h6>{op.ups}</h6>
                            </div>
                            <div className='downvotes'>
                                <img src={arrow} className='bottomIcon' id='downArrow'/>
                                <h6>{downvotes}</h6>
                            </div>
                            <div className='comments'> 
                                <img src={comments} className='bottomIcon'/> 
                                <h6>{op.num_comments}</h6>
                            </div>
            </div>
            <div className='postbreak'>
            </div>
        </div>
    )
}