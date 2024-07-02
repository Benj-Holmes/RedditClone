import React from 'react';
import './articles.css';
import PostIcon from '../imgs/ThumbnailReplacer.jpeg';

const Post = (props) => {
    return (
        <div>
            <article className='post'>
                <div className='postTop'>
                    <p>{props.post.subreddit_name_prefixed}</p>
                    <p>u/{props.post.author}</p>
                </div>
                <div className='postTitle'>
                    <h3>{props.post.title}</h3>
                </div>
                <div className='postMain'>
                    {/* This Ternary checks for a video, which some posts have instead of a text body, if so it posts it */}
                    {(props.post.media?.reddit_video != null) ? <video controls src={props.post.media.reddit_video.fallback_url}/>: ''}

                    {(props.post.selftext) ? <p>{props.post.selftext}</p> : ''}

                    {/* This Ternary checks for a thumbnail and posts a generic one if it wasn't returned from the API */}
                    {(props.post.thumbnail !== 'self' && props.post.thumbnail !== 'default') ? 
                    <img className='thumbnail' src={props.post.thumbnail} alt='' 
                    style={{width: props.post.thumnbnail_width, height: props.post.thumnbnail_height}} /> :
                    <img className='thumbnailReplacement' src={PostIcon} alt='' /> }
                </div>
                <div className='postBottom'>

                </div>
            </article>
            <div className='postbreak'>

            </div>
        </div>
    );
}

export default Post;

