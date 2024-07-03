import React from "react";
import { commentsSelector } from "../slices/threadSlice";
import { useSelector } from "react-redux";
import userIcon from '../imgs/UserIcon2.png';
import Reply from "./reply";

export const Comment = (props) => {
    const comments = useSelector(commentsSelector);

    return (
        <>
        {comments[props.id].author && comments[props.id].body ? (
        <div>
            <div className="commentTop">
                <img className='rIcon' src={userIcon} />
                <p className="author2"> u/{comments[props.id].author} </p> 
            </div>
            <p className="commentBody"> {comments[props.id].body} </p>
            {/* This Ternary only adds the replies heading to comments which do have reviews */}
            {(comments[props.id]?.replies?.data?.children != undefined) ? 
                <p class='asideTitles'> Replies </p> : '' }
            {/* This ternary generates the reply components for each reply attached to this comment */}
            {comments[props.id] &&
            comments[props.id].replies &&
            comments[props.id].replies.data &&
            comments[props.id].replies.data.children &&
            comments[props.id].replies.data.children.map((r, index) => (
            <Reply key={index} data={r.data} id={index} />
            ))}
            <div className='postbreak'>
            </div>
        </div>
        ): ''}
        </>
    )
}
