import React from 'react';
import img from '../images/face.png';
import Accordion from 'react-bootstrap/Accordion';
const Facilityr = () => {
    return (
        <div className='container mt-3 mb-3' >
            <h1 className='text-danger text-danger'>FAQ</h1>
            <hr className='text-white mx-auto w-25' />
            <div className='row align-items-center'>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12'>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12 text-white'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='text-start fw-bold'>Faculty of Science and Engineering</Accordion.Header>
                            <Accordion.Body>
                            Computer Science And Engineering (CSE)<br/>Computer And Communication Engineering (CCE)<br/>Electrical And Electronic Engineering (EEE)<br/>Electronic And Telecommunication Engineering (ETE)<br/>Civil Engineering (CE)<br/>Pharmacy
        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='text-start fw-bold'>Faculty of Shariah and Islamic Studies</Accordion.Header>
                            <Accordion.Body>
                            Qur’anic Sciences and Islamic Studies (QSIS)<br/>
                            Da’wah & Islamic Studies (DIS)<br/>
                            Science of Hadith and Islamic Studies (SHIS)
        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Facilityr;
