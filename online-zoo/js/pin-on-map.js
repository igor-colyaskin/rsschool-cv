let map = document.querySelector('#svg-map');
let china = map.getElementById('china');
let usa = map.getElementById('usa');
let kamerun = map.getElementById('kamerun');


let panda = document.querySelector('#pin-panda');
console.log(panda);

panda.addEventListener('mouseover', excitePanda);
panda.addEventListener('mouseout', calmPanda);

function excitePanda(event) {china.setAttribute('fill', '#e48c29')}
function calmPanda(event) {china.setAttribute('fill', '#dadada')}

let eagle = document.querySelector('#pin-eagle');

eagle.addEventListener('mouseover', exciteEagle);
eagle.addEventListener('mouseout', calmEagle);

function exciteEagle(event) {usa.setAttribute('fill', '#e48c29')}
function calmEagle(event) {usa.setAttribute('fill', '#dadada')}

let croco = document.querySelector('#pin-croco');

croco.addEventListener('mouseover', exciteCroco);
croco.addEventListener('mouseout', calmCroco);

function exciteCroco(event) {usa.setAttribute('fill', '#e48c29')}
function calmCroco(event) {usa.setAttribute('fill', '#dadada')}

let gorilla = document.querySelector('#pin-gorilla');

gorilla.addEventListener('mouseover', exciteGorilla);
gorilla.addEventListener('mouseout', calmGorilla);

function exciteGorilla(event) {kamerun.setAttribute('fill', '#e48c29')}
function calmGorilla(event) {kamerun.setAttribute('fill', '#dadada')}
