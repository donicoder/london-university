import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'We are a federation consisting of 17 independent members. We work together to deliver the best education in London and across the world.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'The module considers a range of strategic management accounting techniques and critically examines the impact of behavioural and social issues in the use and implementation of management accounting techniques. '
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Explanation and discuss a range of advanced costing methods identify and critique a range of investment appraisal techniques,   for dealing with risk and uncertainty in decision- making.'
    }
];

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <h1 className='text-center fw-semibold'>React University London</h1>
                    <p style={{ textAlign: 'center' }}>Founded on the ideals of inclusivity, diversity and collaboration, the University of London is a pioneering institution committed to increasing access to education, championing research excellence and delivering social good.

                        Course search</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>2024 start courses</h2>
                            explain and discuss a range of advanced costing method for dealing with risk and uncertainty
                            <p></p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect'>
                                        <Card.Img variant="top" src={blog.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;