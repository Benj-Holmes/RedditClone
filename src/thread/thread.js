import React from "react";
import './thread.css';
import { commentsSelector, fetchComments } from "../slices/threadSlice";
import { useSelector, useDispatch } from "react-redux";
import { threadSelector } from "../slices/threadSlice";
import { useEffect } from "react";
import { OriginalPost } from "./originalPost";
import { Comment } from "./comment";
import { selectLoading } from "../slices/threadSlice";
import { PuffLoader } from "react-spinners";


export const Thread = () => { 
    const dispatch = useDispatch();
    const thread = useSelector(threadSelector);
    const comments = useSelector(commentsSelector)
    const isLoading = useSelector(selectLoading)
    
    useEffect(() => {
        dispatch(fetchComments(thread))
    }, [dispatch]);


    // Scrolls the window back to the top of the page when the user selects a new thread
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [thread]); 


    
    return (
        
        <div className="threadDiv">
            {/* Checks the loading state to display an effect while fetching resources */}
            { isLoading ? 
                <div className="loadingHandler">
                    <p className="loading"> Loading.. </p>
                    <PuffLoader className="puff" stroke='#cccccc' size={150}/>
                </div>
               : 
               <div className="thread-container">
               <OriginalPost />
               {(comments != null ) ? comments.map((c, index) => <Comment key={index} id={index}/> ) : '' }
           </div> }
        </div>
    );
};

export default Thread;