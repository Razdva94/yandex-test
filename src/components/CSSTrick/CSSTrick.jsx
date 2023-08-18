import React from 'react';
import './CSSTrick.css';

const CSSTrick = () => {
  return (
    <section className='css-trick'>
      <h3 id='css-trick' className='title'>
        CSS фишка
      </h3>
      <div className='line line_margin' style={{marginBottom: '30px'}} />
      <iframe
        id='ytplayer'
        type='text/html'
        width='720'
        height='405'
        src='https://www.youtube.com/embed/IFkjQKXPq2U'
        frameborder='0'
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default CSSTrick;
