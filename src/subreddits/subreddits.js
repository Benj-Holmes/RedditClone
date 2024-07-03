import React, {useEffect} from "react";
import './subreddits.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../slices/subredditsSlice";
import { subredditSelector } from "../slices/subredditsSlice";
import Sub from './sub.js';
//import { subSelector } from "../../slices/articlesSlice";


export const Subreddits = (props) => {   
    const dispatch = useDispatch();
    const subreddits = useSelector(subredditSelector);
    //const currentSub = useSelector(subSelector);

    useEffect(() => {
        dispatch((fetchSubreddits('r/popular')))
    }, [dispatch]);


    // console.log(subreddits)
    return (
        <div>
            <p className="asideTitles">Communities</p>
            <div className="subredditsContainer">
                {(subreddits != null) ? 
                    subreddits.map((sub, index) => <Sub key={index} sub={sub.data} /> ) : '' }
            </div>
            <div className='postbreak'>
            </div>
        </div>
    );
};

export default Subreddits;