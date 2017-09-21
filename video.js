//================================================================================================================//
// création des const
//================================================================================================================//
const lecteur = document.querySelector('#lecteur'); // stock le lecteur
const barreVitesse = document.querySelector('#barreVitesse'); // stock le slider
const vitesse = document.querySelector('#vitesse'); // stock le speed
const btnPlay = document.querySelector('#btnPlay'); // stock bouton play
const dureeVideo = lecteur.duration; // stock la durée de la vidéo, la propiété lecteur.duration est fourni

const barreRecherche = document.querySelector('#barreRecherche'); // stock la barre de recherche


//================================================================================================================//
// création des events
//================================================================================================================//
btnPlay.addEventListener('click', playVideo); // l' event click sur le bouton play appel la fonction playVideo
btnStop.addEventListener('click', stopVideo);
barreVitesse.addEventListener('change', ajusteVitesse);

lecteur.addEventListener('durationchange', reglageBarreRecherche);
lecteur.addEventListener('canplay', reglageLecteur);
lecteur.addEventListener('ended', clean);

barreRecherche.addEventListener('change', chercherVideo);
barreRecherche.addEventListener('timeupdate', majUI);


//================================================================================================================//
// création des fonctions
//================================================================================================================//
// s' assure que le lecteur est près à jouer
function reglageLecteur() {
  reglageBarreRecherche(); // appel la méthode qui permet de définir la valeur max de la durée de la vidéo
  lecteur.volume = 0.5; // baisse le volume
}

// affiche play si la vidéo est terminé
function clean() {
  if (lecteur.paused) {
    btnPlay.innerText = 'play';
  }
}

// défini la durée maximum de la barre de recherche
function reglageBarreRecherche() {
  console.log('durationchange');
  barreRecherche.max = lecteur.duration;
}

// permet d' avancer la vidéo à partir de la barre de recherche
function chercherVideo() {
  lecteur.currentTime = barreRecherche.value;
}

// met à jour la barre de recherche
function majUI() {
  barreRecherche.value = video.currentTime;
}

// réagit au click sur le bouton play
function playVideo(evt) {
  if (lecteur.paused) {
    lecteur.play(); // lecteur.play() fourni
    btnPlay.innerText = 'pause';
  } else {
    lecteur.pause(); // lecteur.pause() fourni
    btnPlay.innerText = 'play';
  }
}

// réagit au click sur le bouton stop
function stopVideo(evt) {
  lecteur.currentTime = 0; // remet le lecteur à 0
}

// réagit au changement sur le slider
function ajusteVitesse(evt) {
  console.log(evt.target.value);
  const vitesseActuelleLecture = evt.target.value;
  vitesse.innerHTML = `${vitesseActuelleLecture}X`;
  lecteur.playbackRate = vitesseActuelleLecture;
}