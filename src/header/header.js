import './header.css';
import logo from '../imgs/redditLogo.png'
import magnifyingGlass from '../imgs/magnifyingGlass.png';
import { setSubreddit, subSelector } from '../slices/articlesSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { toggleMode } from '../slices/themeSlice';
import { themeSelector } from '../slices/themeSlice';

const Header = () => {
    const searchTerm = useSelector(subSelector);
    const dispatch = useDispatch();
    const theme = useSelector(themeSelector);

    // Debounce function for handling search input delays
    const updateSearch = _.debounce((value) => {
        dispatch(setSubreddit(value)); 
        
    }, 300);

    // Event handler for input change
    const handleInputChange = (event) => {
        const { value } = event.target;
        updateSearch(value);
    };

    // Changes the state between light and dark, which we use to determine our light and dark mode.
    const dispatchToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(toggleMode());
    }

    return (
        <div className='headerContainer'>
            <div className='logo'>
                <img src={logo} alt='Reddit Logo' />
            </div>
            <div className='title'>
                <h2> redditHub </h2>
            </div>
            <div className='searchBar'>
                <div className='searchBox'>
                    <img className='searchIcon' src={magnifyingGlass} alt='Search Icon' />
                    <input
                        type='text'
                        className='subredditSearch'
                        placeholder='Search Reddit'
                        onChange={handleInputChange} 
                        
                    />
                </div>
            </div>
            <div className='toggleContainer' onClick={dispatchToggle}>
                <div className='themeContainer'>
                    <input id='toggle' className='themeInput' checked={theme === 'Light'} type='checkbox'></input>
                    <label htmlFor='toggle' className='themeLabel'>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;