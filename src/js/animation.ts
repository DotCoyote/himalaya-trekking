import { animate, stagger } from 'motion';

animate('.js-animate-fade-in', { opacity: [0, 1], x: ['-50px', '0'] }, { duration: 0.4, delay: stagger(0.4) });
