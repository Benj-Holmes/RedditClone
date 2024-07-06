import './nav.css';
import home from '../imgs/homewhite.png';
import all from '../imgs/allwhite.png';
import popular from '../imgs/popularwhite.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchArticles, setSubreddit } from '../slices/articlesSlice';

export const Nav = (props) => {   
    const dispatch = useDispatch();

    // Clicking on the link tags below sends the selected subreddit to the state, and then calls for the articles of that subreddit.
    const handleChange = (sub) => {
        dispatch(setSubreddit(sub));
        dispatch(fetchArticles(sub));
    }

    return (
        <div className='navbar'>
            <Link to={'/'} onClick={() => handleChange('r/home')}>
            <div className='home'>
                <img id='homebutton' src={home} />  
                <span> Home </span>
            </div>
            </Link>
            <Link to={'/'} onClick={() => handleChange('r/popular')}>
            <div className='popular'>
                <img id='popbutton' src={popular} />  
                <span> Popular </span>
            </div>
            </Link>
            <Link to={'/'} onClick={() => handleChange('r/all')}>
            <div className='all'>
                <img id='allbutton' src={all}/>  
                <span> All </span>
            </div>
            </Link>
            <div className='postbreak'>
            </div>
        </div>
    );
};

export default Nav;