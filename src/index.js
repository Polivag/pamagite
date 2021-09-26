import { showSlides } from './app/utils/slider';
import './app/styles/index.scss';

const bootstrap = () => {
  document.addEventListener("DOMContentLoaded", function(event) {
    showSlides();
  });
}

bootstrap();