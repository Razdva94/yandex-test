import React from 'react';
import './ProjectLink.css';

const ProjectLink = () => {
  return (
    <section className='project'>
      <h3 id='project' className='title'>
        Ссылка а проект
      </h3>
      <div className='line line_margin' />
      <a
        className='project__link'
        href='https://github.com/Razdva94/yandex-test'
        target='_blank'
        rel='noreferrer'
      >
        Этот сайт на Github
        <span
          className='project__link-arrow' 
        >
          ↗
        </span>
      </a>
    </section>
  );
};

export default ProjectLink;
