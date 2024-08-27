import './PolicyPage.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import PolicyDummy from '../assets/t00/policy-dummy.svg'
import PolicyPattern from '../assets/t00/policy-pattern.svg'
import LoadZebraWhite from '../assets/t00/loader-zebra-white.svg'
import ZoomIn from '../assets/gui/zoom_in.svg'


function PolicyPage(props) {

    function updateValue(value){
        props.updateValue(value)
    }
    return (
        <>
            <Header courseLists={props.courseLists} handler={props.handler} updateValue={updateValue} text={props.text}/>
            <div className='policy-page'>
                <div className='white-bg-conatiner'>
                    <div className='description-container'>
                        <img src={LoadZebraWhite} alt='Load Zebra White BG'/>
                        <p>Our policy sets out responsibilities and standards to help keep our data safe</p>
                        <p>If you are not yet familiar with it, select the policy image to take a look, otherwise select Next to continue</p>
                    </div>
                    <div className='img-container'>
                        <div className='policy-description-centre'>
                            Your policy here
                        </div>
                        <img src={PolicyDummy} className='policy-dummy-img' alt='Policy dummy'/>
                        <img src={PolicyPattern} className='policy-pattern-img' alt='Policy pattern'/>
                        <img src={ZoomIn} className='policy-zoomin-img' alt='Zoom in'/>
                    </div>
                </div>
            </div>
            <Footer handler={props.handler}/>
        </>
    );
}

export default PolicyPage;