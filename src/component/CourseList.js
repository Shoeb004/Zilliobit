import {NavLink } from 'react-router-dom';
import './CourseList.css'

function CourseList(props) {
    const courseLists = props.courseLists;
    
    return (
        <>
            <ul className='course-lists'>
                    {courseLists.map((courseList)=>
                         <li key={courseList.id}>
                            <NavLink to={`/video_page/id:${courseList.id}`}>
                                {`${courseList.id}.  ${courseList.heading}`}
                            </NavLink>
                        </li>)
                    }
            </ul>
        </>
    );
}

export default CourseList
