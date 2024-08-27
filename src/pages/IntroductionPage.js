import './Introductionpage.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import introIamge from '../assets/t00/panel-1.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function IntroductionPage (props) {
    const [name, setName] = useState('');
    const navigation = useNavigate()

    function inputHandler(event){
        setName(event.target.value);
    }

    function submitHandler() {
        if(name !== ''){
           navigation("/menuPage")
        }
        else{
            alert("Please enter name")
        }
    }
    function updateValue(value){
        props.updateValue(value)
    }

    return (
        <>
             <Header text={props.text} updateValue={updateValue}/>
        <div className='introduction-page'>
                <img src={introIamge} className='introduction-bg-image' alt='Intro img'/>
            <div className='introduction-text-container'>
                <p className='introduction-heading'>
                    In this course, we'd like to use your name 
                </p>
                <p className='introduction-heading'>
                    (you can make up a name if you prefer).
                </p>
                <p className='introduction-heading'>
                Please enter it here:  
                </p>
                <div className='input-container'>
                    <input type='text' placeholder='Type here' value={name} onChange={inputHandler}/>
                </div>
                <div>
                <button className='btn-introduction-submit' type='submit' onClick={submitHandler}>Submit</button>
                </div>
            </div>

        </div>
        <Footer />
        </>
    );
}

export default IntroductionPage;