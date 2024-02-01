import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'The University of London (UoL; abbreviated as Lond or more rarely Londin in post-nominals) is a federal[a] public research university located in London, England, United Kingdom. The university was established by royal charter in 1836 as a degree-awarding examination board for students holding certificates from University College London!'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'The University of London (UoL; abbreviated as Lond or more rarely Londin in post-nominals) is a federal[a] public research university located in London, England, United Kingdom. The university was established by royal charter in 1836 as a degree-awarding examination board for students holding certificates from University College London!'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'The University of London (UoL; abbreviated as Lond or more rarely Londin in post-nominals) is a federal[a] public research university located in London, England, United Kingdom. The university was established by royal charter in 1836 as a degree-awarding examination board for students holding certificates from University College London!'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Coursework (50% weighting):There is one item of coursework for this module which contributes to the final assessment mark for this module. Coursework: a written essay of a maximum of 2,000 or 2,500 words (deadline – weeks 9-12) The coursework is designed to check student progress, extend and reinforce concepts covered and also test individual performance. Examination (50% weighting):The final piece of assessment will be an unseen written examination of 2 hours’ duration.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Coursework (50% weighting):There is one item of coursework for this module which contributes to the final assessment mark for this module. Coursework: a written essay of a maximum of 2,000 or 2,500 words (deadline – weeks 9-12) The coursework is designed to check student progress, extend and reinforce concepts covered and also test individual performance. Examination (50% weighting):The final piece of assessment will be an unseen written examination of 2 hours’ duration.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'Coursework (50% weighting):There is one item of coursework for this module which contributes to the final assessment mark for this module. Coursework: a written essay of a maximum of 2,000 or 2,500 words (deadline – weeks 9-12) The coursework is designed to check student progress, extend and reinforce concepts covered and also test individual performance. Examination (50% weighting):The final piece of assessment will be an unseen written examination of 2 hours’ duration.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
];

function Courses() {
    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Courses</h1>
                    <p className='text-center w-75 mb-5'>The university consists of 17 member institutions and three central academic bodies.[14][15] The university has around 48,000 distance learning external students[16] and around 219,410 campus-based internal students, making it the largest university by number of students in the United Kingdom. </p>
                </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <FaqAccordion />
            </div>
        </div>
    )
}

export default Courses;