import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, postSelector, subSelector } from '../slices/articlesSlice';
import Post from './post.js';
import './articles.css';

const Articles = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postSelector);
    const currentSub = useSelector(subSelector);

    // On page load, and when the current sub is selected, we dispatch the action to populate the list of articles.
    useEffect(() => {
        dispatch(fetchArticles(currentSub));
    }, [dispatch, currentSub]);

    return (
        <div className='articlesContainer'>
            {posts.data != null
              ? posts.data.children.map((post, index) => <Post key={index} post={post.data} />) 
              : 'No posts available' }
        </div>
    );
}

export default Articles;
