import React from 'react';
import './subreddits.css';
import subicon from '../imgs/redditsub.png'

const Sub = (props) => {
    return (
        <div>
            <div className='subContainer'>
                {(props.sub.icon_img !== '') 
                    ? <img src={props.sub.icon_img} alt='?' /> : <img src={subicon} alt='?'/> }
                <p className='subTitle'>{props.sub.title}</p>
            </div>
        </div>
    );
}

export default Sub;
