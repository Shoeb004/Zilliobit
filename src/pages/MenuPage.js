import './MenuPage.css';
import Header from '../component/Header';
import CourseList from '../component/CourseList'
import menuPanel from '../assets/t00/menu-panel.svg';

function MenuPage (props) {
    const courseLists = props.courseLists;

    function updateValue(value){
        props.updateValue(value)
    }

    return(
        <div>
             <Header text={props.text} updateValue={updateValue}/>
            <div className='Menu'>
                <div className='text-container'>
                    <h1>Menu</h1>
                    <p>Select the first topic to begin.</p>
                </div>
                <div className='display-container'>
                    <img src={menuPanel} alt='Menu panel'/>
                    <CourseList courseLists={courseLists}/>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;