import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, postSelector, subSelector } from '../slices/articlesSlice';
import Post from './post.js';
import './articles.css';

const Articles = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postSelector);
    const currentSub = useSelector(subSelector);

    useEffect(() => {
        dispatch((fetchArticles(currentSub)))
    }, [dispatch]);

    return (
        <div className='articlesContainer'>
            { posts != null ? posts.map((post, index) => <Post key={index} post={post.data} />) : '' }
        </div>
    );
}

export default Articles;
