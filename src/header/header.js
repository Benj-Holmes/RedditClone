import './header.css';
import logo from '../imgs/redditLogo.png'
import magnifyingGlass from '../imgs/magnifyingGlass.png';
import lightMode from '../imgs/lightmode.png';
import darkMode from '../imgs/darkmode.png';
import { setSubreddit, subSelector } from '../slices/articlesSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../slices/articlesSlice';
import _ from 'lodash';

const Header = () => {
    const searchTerm = useSelector(subSelector);
    const dispatch = useDispatch();

    // Debounce function for handling search input
    const updateSearch = _.debounce((value) => {
        dispatch(setSubreddit(value)); // Update Redux store with search term
        
    }, 300);

    // Event handler for input change
    const handleInputChange = (event) => {
        const { value } = event.target;
        updateSearch(value); // Trigger debounce function with input value
    };

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
                        onChange={handleInputChange} // Use handleInputChange here
                        
                    />
                </div>
            </div>
            <div className='toggleContainer'>
                <div className='dark_mode'>
                    <input id='darkmode-toggle' className='dark_mode_input' type='checkbox'></input>
                    <label htmlFor='darkmode-toggle' className='dark_mode_label'>
                        {/* <img src={lightMode} />
                        <img src={darkMode} /> */}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;