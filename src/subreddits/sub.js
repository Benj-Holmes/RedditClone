import React from 'react';
import './subreddits.css';
import subicon from '../imgs/redditsub.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchArticles, setSubreddit } from '../slices/articlesSlice';

const Sub = (props) => {
    const dispatch = useDispatch();

    // This function and the Link tag below rerender the page if the user wants to go to another subreddit.
    const handleClick = () => {
        dispatch(setSubreddit(props.sub.url));
        dispatch(fetchArticles(props.sub.url));
    }

    return (
        <div>
            <Link to={'/'} className='link' onClick={handleClick} >
            <div className='subContainer'>
                {(props.sub.icon_img !== '') 
                ? <img src={props.sub.icon_img} alt='?' /> : <img src={subicon} alt='?'/> }
                <p className='subTitle'>{props.sub.title}</p>
            </div>
            </Link>
        </div>
    );
}

export default Sub;
