const FEE = require('./front-end-engg.js');
const EXP = document.getElementById('exp');
const SKILLS = document.getElementById('skills');
const REQ = ["html", "css", "js"];

SKILLS.innerText = FEE.requirements.map((i) => i);