import './VideoPage.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import v1 from '../assets/video/v1.mp4'
import { useNavigate } from 'react-router-dom';

function VideoPage(props) {
    const navigate = useNavigate()

    function videoEndHandler(){
        navigate('/policypage')
    }
function updateValue(value){
    props.updateValue(value)
}
    return (
        <>
            <Header courseLists={props.courseLists} handler={props.handler} updateValue={updateValue} text={props.text}/>
                <div className='main-page'>
                <div className='white-bg-conatiner'>
                    <div className='video-container'>
                        <video width='1100px' height='497px' controls onEnded={videoEndHandler}>
                            <source src={v1} type="video/mp4" />
                        </video>
                        <button className='viewtranscript-btn'>View Transcript</button>
                        {/* <button className='viewtranscript-btn'>{id}</button> */}
                    </div>
                </div>
            </div>
            <Footer handler={props.handler}/>
        </>
    );
}

export default VideoPage;