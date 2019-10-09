import React from 'react';
import './style/Work.css';
import art from './assets/artstagram.png';
import gitjobs from './assets/gitjobs.png';
import tre from './assets/tretre.png';

function Work() {
  return (
    <div className='container'>
    <div className="projects">
      <div>
        <img src={tre} alt='tree' />
      </div>

      <div>
        <img src={gitjobs} alt='git' />
      </div>

      <div>
        <img src={art} alt='art' />
      </div>
    </div>

    </div>
  );
}

export default Work;
