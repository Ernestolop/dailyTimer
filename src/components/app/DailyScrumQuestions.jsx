import { useState, useEffect } from 'react';

const DailyScrumQuestions = () => {
  const questions = [
    '¿Qué hiciste ayer?',
    '¿Tuviste algún impedimento para avanzar?',
    '¿Qué harás hoy?',
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const questionElement = document.querySelector('.question');

    if (questionElement) {
      questionElement.style.animation = 'fade-in 1s ease-in-out';
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    const questionElement = document.querySelector('.question');

    if (questionElement && animateOut) {
      questionElement.style.animation = 'fade-out 1s ease-in-out';
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCurrentQuestionIndex(0);
        }
        setAnimateOut(false);

        setTimeout(() => {
          questionElement.style.animation = 'fade-in 1s ease-in-out';
        }, 0);
      }, 1000);
    }
  }, [currentQuestionIndex, animateOut, questions.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='questions'>
      <p className='question'>{questions[currentQuestionIndex]}</p>
    </section>
  );
};

export default DailyScrumQuestions;
