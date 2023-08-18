import React from 'react';
import './AboutMe.css';
import mySchoolPhoto from '../../images/mySchoolPhoto.jpg';
import mySchoolPortret from '../../images/mySchoolPortret.jpg';
import doctor from '../../images/doctor.png';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h3 id='about-me' className='title'>
        О себе
      </h3>
      <div className='line line_margin' />
      <div className='about-me__albom'>
        <figure className='about-me__photo-container'>
          <img className='about-me__photo' src={mySchoolPhoto} alt='Мое фото' />
          <figcaption className='about-me__photo-text'>
            Мое школьное фото. 11 класс, прошло уже 11 лет.
          </figcaption>
        </figure>
        <figure className='about-me__photo-container'>
          <img
            className='about-me__photo'
            src={mySchoolPortret}
            alt='Мое фото'
          />
          <figcaption className='about-me__photo-text'>
            Школьных селфи не сохранилось(не уверен, что в те древние времена
            они существовали). Зато остался фотореалистичный портрет.
          </figcaption>
        </figure>
        <figure className='about-me__photo-container'>
          <img className='about-me__photo' src={doctor} alt='Мое фото' />
          <figcaption className='about-me__photo-text'>
            Это я получаю диплом Яндекс Практикума.
          </figcaption>
        </figure>
      </div>
      <p className='about-me__text'>
        Я начал заниматься программированием довольно недавно. По началу было
        тяжело, но настоящая страсть зажглась во мне, когда я впервые создал
        свою простую веб-страницу. Возможность воплотить свои идеи в
        интерактивные и креативные проекты привлекла меня к миру кода. Каждый
        раз, когда я видел, как небольшой кусочек кода может изменить
        отображение страницы, обрабатывать данные или взаимодействовать с
        пользователем, я чувствовал удивление и восторг. JavaScript стал
        для меня языком, с помощью которого я мог выражать свою творческую
        сущность. Возможность решать сложные задачи, создавать полезные
        приложения и делиться своими знаниями с другими стала моим вдохновением.
        Я нашел в программировании не только навык, но и способность вносить
        изменения в мир вокруг себя.
      </p>
    </section>
  );
};

export default AboutMe;
