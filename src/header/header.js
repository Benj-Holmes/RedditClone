import './header.css';
import logo from '../imgs/redditLogo.png'
import magnifyingGlass from '../imgs/magnifyingGlass.png';
import lightMode from '../imgs/lightmode.png';
import darkMode from '../imgs/darkmode.png';


export const Header = (props) => {   
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
                    <img className='searchIcon'src={magnifyingGlass} /> 
                    <input type='text' className='subredditSearch' placeholder='Search Reddit' />
                </div>
            </div>
            <div className='toggleContainer'>
                <div className='dark_mode'>
                    <input id='darkmode-toggle' className='dark_mode_input' type='checkbox'></input>
                    <label for='darkmode-toggle' className='dark_mode_label'>
                        {/* <img src={lightMode} />
                        <img src={darkMode} /> */}
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Header;