const FLOW = document.querySelector('.flow');

const SEARCHITEMS = document.querySelectorAll('.searching__item');

const FORM = document.querySelector('form');

const entryButtons = document.querySelectorAll('.js-entry');

const backButtons = document.querySelectorAll('.jsBack');

const elementsToHide = document.querySelectorAll('.js-hide');

const qualifyBtn = document.getElementById('qualify');

const modalBtn = document.querySelectorAll('.js-internet');

// create a count to help with the flow
let count = 0;

// create the flow object
let flow = {};

flow.body = FLOW;

const increment = () => {
  count ++;
}

const decrement = () => {
  count --;
}

const showThis = (el, className = '') => {
  el.classList.add(className);
};

const hideThat = (el, className = '') => {
  el.classList.remove(className);
};

const showThisHideThat = (show, hide, className = '') => {
  hide.classList.remove(className);
  show.classList.add(className);
};

const appendInput = (inputName, inputValue) => {
  let existing = document.querySelector(`input[name=${inputName}]`);
  let clean = inputValue.replace(/[\+\&]/g, 'and');

  if(document.body.contains(existing)) {
    existing.setAttribute('value', clean);
  } else {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', inputName);
    input.setAttribute('value', clean);
    FORM.appendChild(input);
  }
};

const goBack = (current, last) => {
  let className = '';
  if(count == 1) {
    flow.body.classList.remove('flow--active');
    flow.steps[0].classList.remove('flow__step--active');
    elementsToHide.forEach(el => {
      el.classList.remove('hidden');
    });
  }
  if(count > 1 && count < 4) {
    className = 'flow__step--active';
    showThisHideThat(last, current, className);
    showSweetener(last);
  }
  decrement();
};

const showSweetener = parent => {
  setTimeout(function() {
    parent.children[1].classList.add('sweetener--active');
  }, 200);
}

const processing = () => {
  for(let i = 0; i < 3; i++) {
    let length = i + 1;
    setTimeout(function(){
      SEARCHITEMS[i].classList.add('searching__item--loaded');
    }, 1000 * length);
  }
  setTimeout(function(){
    hideThat(flow.steps[count - 1], 'searching--active');
    showThis(flow.steps[count], 'form--active');
  }, 4000);
};

const changeSearchItem = (target, product, value) => {
  target.children[1].innerText = product;
  target.children[2].innerText = value;
}

flow.steps = [];

flow.default = Array.from(document.querySelectorAll('div[data-flow="default"]'));

flow.bundles = Array.from(document.querySelectorAll('div[data-step*="-bundle"]'));

flow.internet = Array.from(document.querySelectorAll('div[data-step*="-internet"]'));

flow.tv = Array.from(document.querySelectorAll('div[data-step*="-tv"]'));

entryButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    appendInput('q_desired_services', e.target.innerText);
    showThis(FLOW, 'flow--active');
    elementsToHide.forEach(el => {
      el.classList.add('hidden');
    });
    if(e.target && e.target.matches('button.button--bundle')) {
      flow.steps = [];
      flow.steps = [...flow.bundles, ...flow.default];
      showThis(flow.steps[0], 'flow__step--active');
      showSweetener(flow.steps[0]);
      increment();
    };
    if(e.target && e.target.matches('button.button--tv')) {
      flow.steps = [];
      flow.steps = [...flow.tv, ...flow.default];
      showThis(flow.steps[0], 'flow__step--active');
      showSweetener(flow.steps[0]);
      increment();
    };
    if(e.target && e.target.matches('button.button--internet')) {
      flow.steps = [];
      flow.steps = [...flow.internet, ...flow.default];
      showThis(flow.steps[0], 'flow__step--active');
      showSweetener(flow.steps[0]);
      increment();
    };
    window.scroll(0, 0);
  });
});


qualifyBtn.addEventListener('click', function(e) {
  appendInput('q_desired_services', 'TV and Internet');
  document.getElementById('visaModal').classList.remove('visa--active');
  document.querySelector('.overlay').classList.remove('overlay--active');
  showThis(FLOW, 'flow--active');
  elementsToHide.forEach(el => {
    el.classList.add('hidden');
  });
  flow.steps = [];
  flow.steps = [...flow.bundles, ...flow.default];
  showThis(flow.steps[0], 'flow__step--active');
  showSweetener(flow.steps[0]);
  increment();
  window.scroll(0, 0);
});

backButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    goBack(flow.steps[count - 1], flow.steps[count - 2]);
  });
});

flow.body.addEventListener('click', function(e) {
  e.stopPropagation();
  // use event delegation to check for the clicked element
  if(e.target && e.target.matches('.button')) {
    let parent = e.target.parentNode.parentNode.parentNode
    let name = parent.dataset.scout;
    appendInput(name, e.target.innerText);
    if(count < 3) {
      showSweetener(flow.steps[count]);
      showThisHideThat(flow.steps[count], flow.steps[count - 1], 'flow__step--active');
      hideThat(parent.children[1], 'sweetener--active');
    }
    if(count > 0 && count < 4) {
      let procId = 'proc-'+count;
      let target = document.getElementById(procId);
      changeSearchItem(target, parent.dataset.proc, e.target.innerText);
    }
    if(count === 3) {
      showThis(flow.steps[3], 'searching--active');
      hideThat(flow.steps[2], 'flow__step--active')
      flow.body.classList.remove('flow--active');
      processing();
    }
    increment();
  };
});

modalBtn.forEach(btn => {
  btn.addEventListener('click', function(e) {
    let procId = 'proc-'+count;
    let target = document.getElementById(procId);
    appendInput('q_desired_internet_speed', e.target.innerText);
    changeSearchItem(target, 'Internet:', e.target.innerText);
    showSweetener(flow.steps[count]);
    showThisHideThat(flow.steps[count], flow.steps[count - 1], 'flow__step--active');
    hideThat(flow.steps[count - 1].children[1], 'sweetener--active');
    hideThat(document.getElementById('internetModal'), 'visa--active');
    hideThat(document.getElementById('internetModal'), 'visa--internet-active');
    hideThat(document.querySelector('.overlay'), 'overlay--active');
    document.body.removeAttribute('style');
    increment();
  });
});
