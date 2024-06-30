import React, {useEffect} from "react";
import './subreddits.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../slices/subredditsSlice";
import { subredditSelector } from "../slices/subredditsSlice";
//import { SubIcon } from "./subIcon";
//import { subSelector } from "../../slices/articlesSlice";
//import { Link } from "react-router-dom";


export const Subreddits = (props) => {   
    const dispatch = useDispatch();
    const subreddits = useSelector(subredditSelector);
    //const currentSub = useSelector(subSelector);

    useEffect(() => {
        dispatch((fetchSubreddits('popular')))
    }, [dispatch]);

    // console.log(subreddits)
    return (
        // <div className="sub-box">
        //     {/* <Link to={'/'} className='link1'> */}
        //     <div className="subreddits-container">
        //         {(subreddits != null ) ? subreddits.map((sub, index) => <p key={index} sub={sub.data} /> ) : '' }
        //     </div>
        //     {/* </Link> */}
        // </div>
        <div>
            Hi!
        </div>
    );
};

export default Subreddits;