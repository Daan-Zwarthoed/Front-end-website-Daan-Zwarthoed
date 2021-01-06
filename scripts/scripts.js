/* ************* */
// Begin variablen
/* ************* */

var footer = document.querySelector('footer');
var body = document.querySelector('body');
var triggerPoint = body.scrollHeight - 1000;

var featuredProjectBlok = document.querySelector('.featuredProject');
var windowHeight = window.innerHeight;
var startHoogteFeatured = Math.ceil(window.innerHeight / 4);
var eindeHoogteFeatured = window.innerHeight * 2 + Math.ceil(window.innerHeight / 20);

var header = document.querySelector('header');
var lastScrollTop = 0;

var fancyKopjeExtraKopjes = document.querySelector('.extraKopjes > div:nth-of-type(1) > h2:nth-of-type(2)');
var fancyKopjeLatest = document.querySelector('.latest > div:nth-of-type(1) > h2:nth-of-type(2)');
var transformHoeveelheid = 300;

/* ************* */
// Einde variablen
/* ************* */

/* ************* */
// Begin scroll functies
/* ************* */

function scrollFunctions() {
  // Dit kijkt met het bovengemaakte triggerpoint waarneer de footer animatie geactiveerd moet worden
  if (scrollY > triggerPoint) {
    footer.classList.add('startFooter');
  } else if (scrollY < triggerPoint) {
    footer.classList.remove('startFooter');
  }

  // Dit kijkt wanneer het de achtergrond blauw moet worden op de index pagina
  if (body.className == 'index') {
    if (scrollY > startHoogteFeatured && scrollY < eindeHoogteFeatured) {
      featuredProjectBlok.classList.add('featuredProjectActief');
    } else {
      featuredProjectBlok.classList.remove('featuredProjectActief');
    }

    // Dit maakt het zo dat de header wit is op de index pagina als je niet helemaal bovenin de pagina zit
    if (scrollY > eindeHoogteFeatured) {
      header.classList.add('headerWit');
    } else {
      header.classList.remove('headerWit');
    }
  }

  // een ternary opperator, dit valideert een conditie en voert dan het ene of het andere uit. Het vraagtekentje en de dubbelepunt is dan de conditie
  // Je vraagt dan met het vraagtekentje op lijn 77 of st groterdan 0 is en zo ja maak je het 0
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    header.classList.add('headerHidden');
  } else {
    header.classList.remove('headerHidden');
  }

  // Dit zorgt dat binnen scrollhoogte 1000 en 2600 elke keer als je naar beneden scrolled er 3 scrollhoeveelheid afgaat en omhoog 3 bijkomt
  if (scrollY > 1000 && scrollY < 2600) {
    if (st > lastScrollTop) {
      transformHoeveelheid = transformHoeveelheid - 3;
    } else {
      transformHoeveelheid = transformHoeveelheid + 3;
    }
  }

  // Dit applied de bovengemaakte transformhoeveeleheid op de kopjes op de indexpagina
  if (body.className == 'index') {
    fancyKopjeExtraKopjes.style.transform = "translateX(" + transformHoeveelheid + "px)";
    fancyKopjeLatest.style.transform = "translateX(" + transformHoeveelheid + "px)";
  }

  // Achter het vragentekentje is dus wat er gebeurt als het waar is en er voor is niet waar
  lastScrollTop = st <= 0 ? 0 : st;

}

// de eventlistener voor de scroll functies
window.addEventListener('scroll', scrollFunctions);

/* ************* */
// Einde scroll functies
/* ************* */

/* ************* */
// Begin andere functies
/* ************* */

// Dit zorgt ervoor dat de video op de indexpagina wordt afgespeeld
var video = document.querySelector('video');

function videoAfspelen() {
  if (body.className == 'index') {
    video.play();
  }
}
videoAfspelen();

// Dit zorgt ervoor dat de dropdownmenu werkt
var dropdownKnop = document.querySelector('header button');
var dropdownZelf = document.querySelector('header')

function dropdownToggle() {
  dropdownZelf.classList.toggle('dropdownActief');
  body.classList.toggle('noScroll')

}

dropdownKnop.addEventListener('click', dropdownToggle);

/* ************* */
// Einde andere functies
/* ************* */
