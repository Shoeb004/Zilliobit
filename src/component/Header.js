import './Header.css';
import exit from '../assets/gui/exit.svg';
import mute from '../assets/gui/mute.svg';
import unMute from '../assets/gui/unmute.svg';
import menu from '../assets/gui/menu.svg';
import { useState } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';

function Header (props) {
    // props.handler()
    const courseLists = props.courseLists
    const navigation = useNavigate()
    const location = useLocation();
    const [muteUnMute, setMuteUnMute] = useState(true);
    const setText = location.pathname.includes('id') ?  courseLists[(location.pathname.split(':').at(-1))-1].heading: 'Introduction';
    if(location.pathname.includes('id')){
    props.updateValue(setText)
    }

    function muteUnMuteChangeHandler() {
        console.log(muteUnMute);
        setMuteUnMute(!muteUnMute)
    }
    function exitHandler(){
        navigation('/')
        props.updateValue('Introduction')
    }
    function menuHandler(){
        navigation('/menuPage')
    }
    return (
            <div className='Header1'>
                <div className='Header'>
                    <div className='logo-container'>
                        <Link to='/' className='logo'>Your logo</Link>
                        {location.pathname !== '/menuPage' && location.pathname !== '/' &&
                            <ul>
                                <li>
                                    <Link to='/menuPage' className='cyber-safety'>
                                    Cyber Safety
                                    </Link>
                                    </li>
                                <li>
                                    <Link>
                                        {props.text}
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                    <ul className='rigt-container'>
                        {location.pathname !== '/menuPage' && location.pathname !== '/' &&
                            <li> 
                            <button onClick={menuHandler}>
                                <img src={menu}  alt='Menu'/>
                                <span>Menu</span>
                            </button>
                        </li>
                        }
                        <li>
                            {  muteUnMute &&
                                <button href='#' onClick={muteUnMuteChangeHandler}>
                                    <img src={mute} alt='Mute'/>
                                    <span>Mute</span>
                                </button>
                            }
                            {  !muteUnMute &&
                                <button href='#' onClick={muteUnMuteChangeHandler}>
                                    <img src={unMute} alt='UnMute'/>
                                    <span>unMute</span>
                                </button>
                            }
                        </li>
                        <li> 
                            <button onClick={exitHandler}>
                                <img src={exit} alt='Exit'/>
                                <span>Exit</span>
                            </button>
                        </li>
                    </ul>
                </div>
             </div>
    );
}

export default Header;