import React from 'react';
import img from '../images/interest.png'
import { Link } from 'react-router-dom';

const Interest = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12'>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12 text-white'>
                    <h5 className='fw-bold'>Why You Have To Join Here ?</h5>
                    <hr className='text-white mx-auto w-50' />
                    <p>IIUC Alumni Association where thousands of students get connected with the reputed company,if you complete your BSc. degree we will welcome you.Because we will try our best to get you a job.So if you new, hurry up to complete your form and get connected with us !</p>
                    <button className='btn btn-light '><Link className='text-decoration-none fw-bold text-black' to='/membership'>Join Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Interest;