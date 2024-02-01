import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Hello! I am Yu Xuan. I am a penultimate-year student studying BSc Economics and Finance at the Singapore Institute of Management (SIM) with the University of London.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Aeronautical Engineering at the diploma level but later discovered a passion for finance and investing, prompting me to pursue a degree in the field. '
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'My academic journey has deepened my understanding of economics and provided me with a theoretical foundation in various financial products.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'Graduates typically enter the workforce with two to three relevant experiences, underscoring the significance of internships as an essential part of the equation.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: 'Additionally, my two-year involvement in the SIM Economics Society has allowed me to conduct research and engage with experienced professionals through various events. '
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Hello! I am Yu Xuan. I am a penultimate-year student studying BSc Economics and Finance at the Singapore Institute of Management (SIM) with the University of London.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: 'My academic journey has deepened my understanding of economics and provided me with a theoretical foundation in various financial products.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: 'Aeronautical Engineering at the diploma level but later discovered a passion for finance and investing, prompting me to pursue a degree in the field. '
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: 'Additionally, my two-year involvement in the SIM Economics Society has allowed me to conduct research and engage with experienced professionals through various events. '
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>BSc Economics and Finance student Yu Xuan reflects on his internship experiences so far and shares some valuable advice for his fellow students.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;