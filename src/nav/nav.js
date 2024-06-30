import './nav.css';
import home from '../imgs/homewhite.png';
import all from '../imgs/allwhite.png';
import popular from '../imgs/popularwhite.png';

export const Nav = (props) => {   
    return (
        <div className='navbar'>
            <div className='home'>
                <img id='homebutton' src={home} />  
                <a> Home </a>
            </div>
            <div className='popular'>
                <img src={popular} />  
                <a> Popular </a>
            </div>
            <div className='all'>
                <img src={all} />  
                <a> All </a>
            </div>
        </div>
    );
};

export default Nav;