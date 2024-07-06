import React, {useEffect} from "react";
import './subreddits.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../slices/subredditsSlice";
import { subredditSelector } from "../slices/subredditsSlice";
import Sub from './sub.js';
import { toggleMenu } from "../slices/subredditsSlice";
import { menuStateSelector } from "../slices/subredditsSlice";

export const Subreddits = (props) => {   
    const dispatch = useDispatch();
    const subreddits = useSelector(subredditSelector);
    const menuState = useSelector(menuStateSelector);

    useEffect(() => {
        dispatch((fetchSubreddits('r/popular')))
    }, [dispatch]);

    return (
        <div className="subMenu">
            <div className="menuTitle">
                <p className="asideTitles">Communities</p>
                {(menuState == false) ?
                <button onClick={() => dispatch(toggleMenu())}> + </button>
                : <button onClick={() => dispatch(toggleMenu())}> - </button> }
            </div>
            {( menuState == true ) ?
            <>
            <div className="subredditsContainer">
                {(subreddits != null) ? 
                    subreddits.map((sub, index) => <Sub key={index} sub={sub.data} /> ) : '' }
            </div>
            <div className='postbreak'>
            </div>
            </>
            : ''}
        </div>
    );
};

export default Subreddits;