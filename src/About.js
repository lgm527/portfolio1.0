import React from 'react';
import me from  './assets/me.jpeg';
import './style/About.css';

function About() {
  return (
    <div className="about">
      <p id='bio'>
      Full stack software developer with a strong enthusiasm for art and connectivity. With experience in JavaScript, React, and Ruby on Rails and a background in cataloguing art, I discovered web development through working at an auction software company. I bring strong skills in research and writing that help foster team productivity and collaboration. If I’m not in front of a computer or piece of art, you can find me hiking or biking somewhere with more trees than people.
      </p>
      <img id='me' src={me} alt='me' />
    </div>
  );
}

export default About;
