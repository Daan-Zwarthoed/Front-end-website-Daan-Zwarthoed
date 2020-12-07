var footer = document.querySelector('footer');
var body = document.querySelector('body');
var triggerPoint = body.scrollHeight - 900;

var featuredProjectBlok = document.querySelector('.featuredProject');
var windowHeight = window.innerHeight;
var startHoogteFeatured = Math.ceil(window.innerHeight / 4);
var eindeHoogteFeatured = window.innerHeight * 2 + Math.ceil(window.innerHeight/20);

var header = document.querySelector('header')
var lastScrollTop = 0;

var doetNiks = document.querySelector('.doetNiks');


function scrollFunctions(){
if(scrollY > triggerPoint){
 footer.classList.add('startFooter');
}else if (scrollY < triggerPoint){
 footer.classList.remove('startFooter');
}

if(body.className == 'index'){
if(scrollY > startHoogteFeatured && scrollY< eindeHoogteFeatured){
 featuredProjectBlok.classList.add('featuredProjectActief');
}else{
featuredProjectBlok.classList.remove('featuredProjectActief');
}


if (scrollY >eindeHoogteFeatured){
header.classList.add('headerWit');
} else {
  header.classList.remove('headerWit');
}
}

var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
if (st > lastScrollTop){
header.classList.add('headerHidden');
} else {
header.classList.remove('headerHidden');
}
lastScrollTop = st <= 0 ? 0 : st;
}

window.addEventListener('scroll', scrollFunctions);

var video = document.querySelector('video');

function videoAfspelen(){
  video.play();
}
videoAfspelen();
