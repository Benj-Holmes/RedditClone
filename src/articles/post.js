import React, { useState, useEffect } from 'react';
import './articles.css';
import PostIcon from '../imgs/ThumbnailReplacer.jpeg';
import rIcon from '../imgs/rlogo.png';
import arrow from '../imgs/arrow.png';
import comments from '../imgs/comment.png';
import { setSelectedThread } from '../slices/threadSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Post = (props) => {
    const dispatch = useDispatch();
    const downvotes = parseInt(props.post.ups - (props.post.ups * props.post.upvote_ratio));
    const [differenceInHours, setDifferenceInHours] = useState(null);
    
    useEffect(() => {
        const timestampToHours = () => {          
            const unixTimestamp = props.post.created;
            const currentTimestamp = Math.floor(Date.now() / 1000);
            const hoursDifference = Math.floor((currentTimestamp - unixTimestamp) / 3600);
            setDifferenceInHours(hoursDifference.toString()); 
        }
        timestampToHours();
    }, [props.post.created]);

    return (
        <div>
            <Link to={'/article'} className='link' onClick={() => dispatch(setSelectedThread(props.post.permalink))} >
            <article className='post'>
                <div className='postTop'>
                    <div className='redditInfo'>
                        <img className='rIcon' src={rIcon}/>
                        <p>{props.post.subreddit_name_prefixed}</p>
                        <p className='timestamp'> {differenceInHours} hrs Ago </p>
                    </div>
                    <p className='userInfo'>u/{props.post.author}</p>
                </div>
                <div className='postBody'>
                    <div className='postMain'>
                        <h3>{props.post.title}</h3>
                        {/* This Ternary checks for a video, which some posts have instead of a text body, if so it posts it */}
                        {(props.post.media?.reddit_video != null) ? <video controls src={props.post.media.reddit_video.fallback_url}/>: ''}
                        {/* This Ternary checks for a text body, and adds if it exists. */}
                        {(props.post.selftext) ? <p>{props.post.selftext}</p> : ''}
                        <div className='postBottom'>
                            <div className='upvotes'>
                                <img src={arrow} className='bottomIcon'/>
                                <h6>{props.post.ups}</h6>
                            </div>
                            <div className='downvotes'>
                                <img src={arrow} className='bottomIcon' id='downArrow'/>
                                <h6>{downvotes}</h6>
                            </div>
                            <div className='comments'> 
                                <img src={comments} className='bottomIcon'/> 
                                <h6>{props.post.num_comments}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='postImg'>
                    {/* This Ternary checks for a thumbnail and posts a generic one if it wasn't returned from the API */}
                    {(props.post.thumbnail !== 'self' && props.post.thumbnail !== 'default') ? 
                    <img className='thumbnail' src={props.post.thumbnail} alt='' 
                    style={{width: props.post.thumnbnail_width, height: props.post.thumnbnail_height}} /> :
                    <img className='thumbnailReplacement' src={PostIcon} alt='' /> }
                        </div>
                    </div>
                </article>
            </Link>
            <div className='postbreak'>

            </div>
        </div>
    );
}

export default Post;

