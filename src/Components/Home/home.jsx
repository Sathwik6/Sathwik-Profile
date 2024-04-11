import React from 'react';
import './home.css';
import profilePicture from '../../assets/background.png';

function Home() {
  const highlightText = "I'm Sathwik".split('').map((char, index) => {
    // Check if the character is a space and handle it explicitly
    return char === ' ' ? (
      <span key={index} style={{ margin: '0 0.2em' }}>&nbsp;</span>
    ) : (
      <span key={index} className="letter" style={{ animationDelay: `${index * 0.16}s` }}>
        {char}
      </span>
    );
  });

  return (
    <div className="homeContainer">
      <div className="introSection">
        <h2 className="highlight">{highlightText}</h2>
        <p className='paragraph'>
            A Software Engineer specializing in Java, Python, and the MERN stack, with a knack for machine learning. Focused on building high-performance applications and intuitive web solutions, my passion lies in unraveling complex data to forge clear insights and elevate user experiences.
        </p>
      </div>
      <div className="pictureSection">
        <img src={profilePicture} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
