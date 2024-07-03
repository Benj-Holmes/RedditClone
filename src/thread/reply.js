import React from 'react';
import replyIcon from '../imgs/reply.png';
import { useSelector } from 'react-redux';
import { commentsSelector } from '../slices/threadSlice';
import userIcon from '../imgs/UserIcon.png';

const Reply = ({data}) => {
    const comments = useSelector(commentsSelector)
    
    return (
        <>
        {data.author && data.body ? (
        <div className='reply'>
            <div className='replyIcon'>
                <img src={replyIcon}/>
            </div>
            <div className='replyContent'>
                <div className='replyTop'>
                    <img class='rIcon' src={userIcon} />
                    <p>u/{data.author}</p>
                </div>
                <div className='replyBody'>
                    <p>{data.body}</p>
                </div>
            </div>
        </div> ): ''}
        </>
    );
}

export default Reply;
