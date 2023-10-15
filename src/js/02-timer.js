// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix'

const btnStart = document.querySelector('[data-start]')
const timer = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

btnStart.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const date = new Date()

      if (date > selectedDates[0].getTime()) {
       return Notiflix.Notify.failure('Please choose a date in the future🕘')
      }
      let timeToCompletion = selectedDates[0].getTime() - date;
      timerInterface(convertMs(timeToCompletion))
      btnStart.disabled = false


      const onClickToStart = () => {

          const intervalId = setInterval(() => {
            if (timeToCompletion < 2000) {
              Notiflix.Notify.success("time finished🕛");
              clearInterval(intervalId)
              
            }
            timeToCompletion -= 1000
            timerInterface(convertMs(timeToCompletion))
            
              }, 1000)
        }
      // onClickToStart(carentTime)
        btnStart.addEventListener('click', onClickToStart)
    },
    
  };
  flatpickr("#datetime-picker", options);




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerInterface(obj) {
  timer.days.textContent = obj.days
  timer.hours.textContent = obj.hours
  timer.minutes.textContent = obj.minutes
  timer.seconds.textContent = obj.seconds
}

// function onClickToStart(time) {
        
//   const intervalId = setInterval(() => {
//     if (time < 2000) {
//       alert("Please choose a date in the future");
//       clearInterval(intervalId)
//     }
//     time -= 1000
//     timerTime(convertMs(time))
    
//       }, 1000)
// }

