import React from 'react';
import { originalPostSelector } from '../slices/threadSlice';
import { useSelector } from 'react-redux';

const SideInfo = () => {
    const post = useSelector(originalPostSelector);

    return (
        <>
        <div className='infoBox'>
            <div className='name'>{post.subreddit_name_prefixed}</div>
            <div className='members'>
                <p>{post.subreddit_subscribers}</p>
                <p className='memberText'>Members</p>
            </div>
        </div>
        <div className='postbreak'>
        </div>
        </>
    );
}

export default SideInfo;
