'use client';

import React from 'react';
import { useTheme } from '../themeContext'; 
import ThemeToggle from '../components/themeToggle'; 

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <ThemeToggle /> 
      <h1 className="text-3xl font-bold mb-4">Welcome to True Social Interaction!</h1>
      <p className="mb-4 text-lg text-center">
        True Social Interaction is a front-end application designed to create a genuine and irreversible social experience for users.
      </p>
      <p className="mb-4 text-lg text-center">
        Unlike traditional platforms, users can engage with content through posts, comments, and likes, with no option to edit or delete their interactions. 
        This ensures that every contribution is final and authentic, reflecting the true nature of social interactions in a digital space.
      </p>
      <p className="mb-4 text-lg text-center">
        The app features a seamless interface for creating and sharing thoughts, fostering a real sense of community. 
        At its core, True Social Interaction embodies the philosophy that every voice matters and every statement is a commitment, 
        making it a unique space for honest expression.
      </p>
      <p className="mb-4 text-lg text-center">
        Users can also choose between dark mode and light mode, tailoring their viewing experience to their preference.
      </p>
    </div>
  );
};

export default About;