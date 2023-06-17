import React from 'react';
import img from '../images/ImageIIUC.jpg';
import StuNews from './StuNews';
const NewsFeed = () => {

    return (
        <div className='container bg-black rounded mb-4 p-4'>
            <div>
                <h5 className='text-white fw-bold pt-2'>Wellcome to IIUC News Feed</h5>
                <hr className='text-white w-50 mx-auto' />
                <img src={img} className='container-fluid rounded' alt="" />
                <p className='text-start text-white p-2'>Since its inception in 1995, International Islamic University Chittagong (IIUC) authority has been taking all possible steps to build up a well-equipped modern library. Now it becomes one of the most extensive libraries among all the private university libraries of Bangladesh. Besides, the university has a Female Academic Zone Library and two seminar libraries (Pharmacy Seminar Library and MBA Seminar Library). The libraries are running under Library and Information Division (LID). The library can accommodate easily over 456 users at a time in its full air-conditioned reading room. The library operates a network of CCTV camera inside the library to ensure the security of itself and also its resources. The library collections are being arranged according to the DDC scheme.</p>
            </div>
            <hr className='text-white' />
            <marquee behavior="" direction="" className='text-white'>
                Welcome to International Islamic University Chittagong students News Section !!!  Welcome to International Islamic University Chittagong students News Section !!!
                Welcome to International Islamic University Chittagong students News Section !!!  Welcome to International Islamic University Chittagong students News Section !!!

            </marquee>
            <hr className='text-white' />

            <StuNews></StuNews>
        </div>
    );
};

export default NewsFeed;