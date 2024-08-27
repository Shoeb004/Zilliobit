import './Home.css';
import { useNavigate} from 'react-router-dom'
import splash from '../assets/t00/splash.svg';
import Header from '../component/Header';

function Home () {
    const navigation = useNavigate();
    function clickHandler() {
        navigation('/introduction')
    }
    return (
        <div>
            <Header/>
        <div className='splash-screen'>
            <div className='main-container'>
                <img src={splash} className='img-spalsh' alt='Splash Iamge'/>
                <div className='main-container-text'>
                    <p className='first-haeding'>Welcome to</p>
                    <h1 className='course-heading'>Cyber safety</h1>
                    <p className='secound-haeding'>
                        Click <span>Start</span> when you are ready to begin.
                    </p>
                    <button className='start-btn' onClick={clickHandler}>Start</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home