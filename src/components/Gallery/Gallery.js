import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

const Gallery = () => {
    return (
        <div className='container'>
            <h3 className='text-white text-center fw-bold'>Intro Of IIUC</h3>
            <hr className='text-white w-25 mx-auto' />
            <YoutubeEmbed embedId="5JqRgaifcps" />
        </div>
    );
};

export default Gallery;