import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>The University of London (UoL; abbreviated as Lond or more rarely Londin in post-nominals) is a federal[a] public research university located in London, England, United Kingdom. The university was established by royal charter in 1836 as a degree-awarding examination board for students holding certificates from University College London.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;