// get id of
const frontend = document.querySelector('a:nth-child(1)');
const design = document.querySelector('a:nth-child(2)');
const and = document.querySelector('a:nth-child(3)');
const development = document.querySelector('a:nth-child(4)');
const sprint5 = document.querySelector('a:nth-child(5)');
const fix = document.querySelector('a:nth-child(6)');
const the = document.querySelector('a:nth-child(7)');
const flow = document.querySelector('a:nth-child(8)');
const user = document.querySelector('a:nth-child(9)');
const interface = document.querySelector('a:nth-child(10)');
const events = document.querySelector('a:nth-child(11)');
const interaction = document.querySelector('a:nth-child(12)');
const userflow = document.querySelector('a:nth-child(13)');
const wireflow = document.querySelector('a:nth-child(14)');
const feedback = document.querySelector('a:nth-child(15)');
const feedforward = document.querySelector('a:nth-child(16)');
const labels = document.querySelector('a:nth-child(17)');
const states = document.querySelector('a:nth-child(18)');
const navigation = document.querySelector('a:nth-child(19)');
const code = document.querySelector('a:nth-child(20)');



// Start button {frontend}
frontend.addEventListener('click', colorchange)
frontend.addEventListener('animationend', colorchange)

function colorchange() {
  frontend.classList.toggle('colorchange')
}
// end button {frontend}

// Start button {design}
design.addEventListener('dblclick', borderchange)
design.addEventListener('animationend', borderchange)

function borderchange() {
  design.classList.toggle('borderchange')
}
// end button {design}

// Start button {and}
and.addEventListener('mousedown', opacitychange)
and.addEventListener('animationend', opacitychange)

function opacitychange() {
  and.classList.toggle('opacitychange')
}
// end button {and}

// Start button {development}
development.addEventListener('mouseup', rotatechange)
development.addEventListener('animationend', rotatechange)

function rotatechange() {
  development.classList.toggle('rotatechange')
}
// end button {development}

// Start button {sprint5}
sprint5.addEventListener('keypress', scalechange)
sprint5.addEventListener('animationend', scalechange)

function scalechange() {
  sprint5.classList.toggle('scalechange')
}
// end button {sprint5}

// Start button {fix}
fix.addEventListener('blur', skewchange)
fix.addEventListener('animationend', skewchange)

function skewchange() {
  fix.classList.toggle('skewchange')
}
// end button {fix}

// Start button {the}
the.addEventListener('load', translatechangehorizontal)
the.addEventListener('animationend', translatechangehorizontal)

function translatechangehorizontal() {
  the.classList.toggle('translatechangehorizontal')
}
// end button {the}

// Start button {flow}
flow.addEventListener('scroll', translatechangevertical)
flow.addEventListener('animationend', translatechangevertical)

function translatechangevertical() {
  flow.classList.toggle('translatechangevertical')
}
// end button {flow}

// Start button {user}
// change the text from horizontal to vertical
user.addEventListener('touchstart', shake)
user.addEventListener('animationend', shake)

function shake() {
  user.classList.toggle('shake')
}
// end button {user}


interaction.addEventListener('touchend', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

