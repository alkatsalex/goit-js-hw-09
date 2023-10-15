import Notiflix from 'notiflix';


const refs = {
    form: document.querySelector('.form'),
    delayInp: document.querySelector('[name="delay"]'),
    stepInp: document.querySelector('[name="step"]'),
    amountInp: document.querySelector('[name="amount"]'),

  }

  refs.form.addEventListener('submit', onSubmit)


  function onSubmit(e) {
    e.preventDefault();
    const amount = parseInt(refs.amountInp.value)
    const firstDelay = parseInt(refs.delayInp.value)
    const step = parseInt(refs.stepInp.value)
    let delay = firstDelay
    for (let position = 1; position <= amount; position += 1) {

        createPromise(position, delay)
        .then(({ position, delay }) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
              })
              .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
              })

              delay+=step
    }
  }

function createPromise(position, delay) {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
            resolve({position, delay})
        } else {
          reject({position, delay})
        }
        }, delay)
      })
   
 
  }
