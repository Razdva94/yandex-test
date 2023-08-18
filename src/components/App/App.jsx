import React from 'react'
import './App.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import ProjectLink from '../ProjectLink/ProjectLink';
import CSSTrick from '../CSSTrick/CSSTrick';

const App = () => {
  return (
    <body className="body">
      <Header />
      <AboutMe />
      <ProjectLink />
      <CSSTrick />
    </body>
  )
}

export default App
