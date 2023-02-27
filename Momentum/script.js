const body = document.querySelector('body');
const time = document.querySelector('.time');
const currDate = document.querySelector('.date');
const date = new Date();
const greeting = document.querySelector('.greeting')
var timeOfDayEn = ['morning', 'afternoon', 'evening', 'night'];
var timeOfDayRu = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
const trackName = document.querySelector('.track-name');
const city = document.querySelector('.city');
//const greetingText = `Good ${timeOfDay}`;
let userName = document.querySelector('.name');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');
const refresh = document.querySelector('.change-quote');

const eng = document.querySelector('.languageEn');

const ru = document.querySelector('.languageRu');
var language = "En";
var imgSource = 'Github';
let timeOfDay = getTimeOfDay();
//const list = './list.json';

language = localStorage.getItem('language');
if (!localStorage.getItem('language')) {
    language = "En";
    
}

if (language === "En") {
    eng.classList.add('active');
    ru.classList.remove('active');
}

if (language === "Ru") {
    ru.classList.add('active');
    eng.classList.remove('active');
      };

ru.addEventListener('click', function() {
    language = "Ru";
    console.log(language);
    ru.classList.add('active');
    eng.classList.remove('active');
    changeLang();
    return language;
      });
    
eng.addEventListener('click', function() {
    language = "En";
    eng.classList.add('active');
    ru.classList.remove('active');
    changeLang();
    return language;
  });

function changeLang() {
      
    showTime() 
    getQuotes()
    getWeather()
    setCityLang ()
    setPlayerLang ()
    changeSetLang();
    changeTitle ();
    setTodoLang();
}
let userLang = language;
console.log(userLang);

function setCityLang (){
    language ==="Ru" ? city.placeholder = '[Введите город]' : city.placeholder = '[Enter your city]';
    if (language ==="En" && city.value === "Minsk" || language ==="En" && city.value ==="Минск" ){ city.value = "Minsk" ;
        
   } else if (language ==="Ru" && city.value === "Minsk" ){
       city.value = "Минск";
   }
}
setCityLang ()


function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    setTimeout(showTime, 1000);
    showDate();
    showGreeting();

}
showTime();

function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    let currentDate;
    eng.classList.contains('active') ? currentDate = date.toLocaleDateString('en-Br', options) : currentDate = date.toLocaleDateString('ru-ru', options)
    currDate.textContent = currentDate;


}
function getTimeOfDay() {
    const hours = date.getHours();
    let result = '';
    if (hours < 6 && hours >= 0) {
        result = timeOfDayEn[3];
    } else if (hours < 12 && hours >= 6) {
        result = timeOfDayEn[0];
    } else if (hours < 18 && hours >= 12) {
        result = timeOfDayEn[1];
    } else {
        result = timeOfDayEn[2];
    }
    return result;
   
}

//console.log(timeOfDay);

function showGreeting() {
 let greetingText ="";
 const hours = date.getHours();
    let result = '';
    if (hours < 6 && hours >= 0) {
      eng.classList.contains('active') ? timeOfDay = timeOfDayEn[3] : timeOfDay = timeOfDayRu[3];
    } else if (hours < 12 && hours >= 6) {
        eng.classList.contains('active') ?  timeOfDay = timeOfDayEn[0] : timeOfDay = timeOfDayRu[0];
    } else if (hours < 18 && hours >= 12) {
        eng.classList.contains('active')? timeOfDay = timeOfDayEn[1] :  timeOfDay = timeOfDayRu[1];    
    } else {
        eng.classList.contains('active')? timeOfDay = timeOfDayEn[2] :  timeOfDay = timeOfDayRu[2];
    }
    
   eng.classList.contains('active')? greetingText = `Good ${timeOfDay}, ` : greetingText = `${timeOfDay}, `;
   eng.classList.contains('active')? userName.placeholder = "[Enter your name]" : userName.placeholder = "[Введите ваше имя]";
    
     greeting.textContent = greetingText;
   
}

function setLocalStorage() {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('imgTag', imgSel.value);
    localStorage.setItem('imgSource', imgSourceSelect.value);
    localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    } 
    if (localStorage.getItem('imgTag')) {
        imgTag = localStorage.getItem('imgTag');
    } 
    if (localStorage.getItem('imgSource')) {
        imgSource = localStorage.getItem('imgSource');
     }
    if (localStorage.getItem('language')) {
        language = localStorage.getItem('language');
}}
window.addEventListener('load', getLocalStorage);

let randomImgNumber = (String(getRandomNum(1, 20)))
let imgSel = document.querySelector('.imgTag');
let imgTags = document.querySelectorAll('.imgTags');
let imgTagsArr = Array.from(imgTags);
let imgTag = imgSel.value;
imgSel.value = getLocalStorage(imgTag);
if (!getLocalStorage(imgTag)) {
    imgSel.value = getTimeOfDay();
}
imgSel.addEventListener('change', function (){  
    var getValue = this.value;
    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    imgTag = getValue;
    setLocalStorage();
    getLocalStorage();
    setBg();
    return imgTag;
  });

  const imgSourceSelect = document.querySelector('.imgSource__select');
  imgSourceSelect.value = getLocalStorage(imgSource);
  if (!getLocalStorage(imgSource)) {
    imgSourceSelect.value = "Github";
  }
  imgSourceSelect.addEventListener ('change', function() {
      imgSource = this.value;  
      setLocalStorage()
      getLocalStorage() 
      setBg();
      return imgSource;
    })
  
  console.log(imgSource);

function setBg() {
    const timeOfDay = getTimeOfDay();
    

    let bgNum = String((randomImgNumber)).padStart(2, '0');
    const image = new Image();
    const url = `https://raw.githubusercontent.com/JuliaBel5/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    if (imgSource === 'Github'){
    image.onload = () => {
        body.style.backgroundImage = `url(${url})`
    }
    image.src = url;
    } else if (imgSource ==='Unsplash'){
        getLinkToImage()
    } else if (imgSource ==='Flickr'){
        getLinkToFlickr()
    }
}
setBg();
let randomApiImgNumber = (String(getRandomNum(0, 100)))

async function getLinkToImage() {
    //console.log(timeOfDay);
    console.log(imgTag);

    const image = new Image();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${imgTag}&client_id=Mz9K4Kz00mI3uWYx1olNeAyxroSooaz-aPl9VA88HFA`;
    const res = await fetch(url);
    const data = await res.json();
    const url2 = data.urls.regular;
    image.src = url2;
    image.onload = () => {
      console.log(`${data.urls.regular}`);
      body.style.backgroundImage =`url(${data.urls.regular})`
    }
  }

  
async function getLinkToFlickr() {
    //console.log(timeOfDay);
    console.log(imgTag);

    const image = new Image();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7cb9db849f93d5ea788766499b12d5a8&tags=${imgTag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let randomFlikrImgNumber = (String(getRandomNum(0, data.photos.photo.length)))
    const url2 = data.photos.photo[randomFlikrImgNumber].url_l;
    image.src = url2;
    //console.log(data.photos.photo[randomFlikrImgNumber].url_l);
    image.onload = () => {
        body.style.backgroundImage = `url(${url2})`;
}
    
}

function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);

function getSlideNext() {
    if (randomImgNumber === 20) {
        randomImgNumber = 1;
    } else {
        randomImgNumber++;
    }
    setBg();

}

function getSlidePrev() {
    if (randomImgNumber === 1) {
        randomImgNumber = 20;
    } else {
        randomImgNumber--;
    }
    setBg();
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
window.addEventListener('beforeunload', setLocalStorageWeather);
window.addEventListener('load', getLocalStorageWeather);

city.addEventListener('keypress', setCity);
function setLocalStorageWeather() {
    localStorage.setItem('city', city.value);
}


function getLocalStorageWeather() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
     city.value = "Minsk";
    }
    getWeather()
    return city.value;
}

async function getWeather() {
    if (language === "En") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3a1b915768c912a017bc99063d148140&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    let json = url;
 
    try {
      JSON.parse(json)
    } catch {
    if (data.cod === "400") {
        error.textContent = "Please, enter a city name";
        temperature.textContent = "";
        weatherDescription.textContent = "";
        wind.textContent = "";
        humidity.textContent = "";
    } else if (data.cod === "404") {
        error.textContent = "Please, enter a valid city name";
     temperature.textContent = "";
        weatherDescription.textContent = "";
        wind.textContent = "";
        humidity.textContent = "";
   } }
  
   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp.toFixed(0))}°C,`;
    weatherDescription.textContent = `${data.weather[0].description},`;
    wind.textContent = `Wind Speed: ${(Math.round(data.wind.speed))} m/s,`;
    humidity.textContent = `Humidity: ${(Math.round(data.main.humidity))}%`;
    error.textContent = "";
   
    

    } else {
      const  url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=3a1b915768c912a017bc99063d148140&units=metric`;
      const res = await fetch(url);
    const data = await res.json();
    let json = url;
 
    try {
      JSON.parse(json)
    } catch {
    if (data.cod === "400") {
        error.textContent = "Введите название города";
        temperature.textContent = "";
        weatherDescription.textContent = "";
        wind.textContent = "";
        humidity.textContent = "";
    } else if (data.cod === "404") {
        error.textContent = "Такого города нет";
     temperature.textContent = "";
        weatherDescription.textContent = "";
        wind.textContent = "";
        humidity.textContent = "";
   } }
  
   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp.toFixed(0))}°C,`;
    weatherDescription.textContent = `${data.weather[0].description},`;
    wind.textContent = `Скорость ветра: ${(Math.round(data.wind.speed))} м/с,`;
    humidity.textContent = `Влажность: ${(Math.round(data.main.humidity))}%`;
    error.textContent = "";
    };

}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
 
async function getQuotes() {

    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    let quotes;
    eng.classList.contains('active') ? quotes = './data.json' : quotes = './dataRu.json'
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQuoteNumb = getRandomNum(0, data.length);

    quote.textContent = data[randomQuoteNumb].text;
    author.textContent = data[randomQuoteNumb].author;

}
getQuotes();
refresh.addEventListener('click', getQuotes);


const audio = new Audio();
let isPlay = false;
let playNum = 0;
audio.src = playList[playNum].src;

const playBtn = document.querySelector('.play');

playBtn.addEventListener('click', playAudio);


function playAudio() {

    if (!isPlay) {
        
        audio.play();
        isPlay = true;
        playBtn.classList.toggle('pause');
        playItems[playNum].classList.toggle('item-active');
        track_name.textContent =  playList[playNum].title;
        now_playing.textContent = "Playing " + `${playNum + 1}` + " of " + `${playList.length}`;
        duration.textContent = playList[playNum].duration;
        updateTimer = setInterval(seekUpdate, 1000);

       
    } else {
        audio.pause();
        isPlay = false
        playBtn.classList.toggle('pause');
        playItems[playNum].classList.toggle('item-active');
    }
}

import playList from './playList.js';


const playNextBut = document.querySelector('.play-next');
const playPrevBut = document.querySelector('.play-prev');
window.addEventListener('beforeunload', reset);


function playNext() {
    reset();
    playNum < playList.length - 1 ? playNum += 1 : playNum = 0;
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    playNum > 0 && playNum < playList.length? playItems[playNum-1].classList.remove('item-active'): playItems[playList.length-1].classList.remove('item-active');
    playItems[playNum].classList.toggle('item-active');
    track_name.textContent =  playList[playNum].title;
    now_playing.textContent = "Playing " + `${playNum + 1}` + " of " + `${playList.length}`;
    duration.textContent = playList[playNum].duration;
    updateTimer = setInterval(seekUpdate, 1000);
    

}

function playPrev() {
    reset();
    playNum === 0 ? playNum = playList.length - 1 : playNum -= 1;
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    playNum === 0 || playNum < playList.length-1? playItems[playNum+1].classList.remove('item-active'): playItems[0].classList.remove('item-active');
    playItems[playNum].classList.toggle('item-active');
    track_name.textContent =  playList[playNum].title;
    now_playing.textContent = "Playing " + `${playNum +1}`+ " of " + `${playList.length}`;
    duration.textContent = playList[playNum].duration;
    updateTimer = setInterval(seekUpdate, 1000);
    
}

playNextBut.addEventListener('click', playNext);
playPrevBut.addEventListener('click', playPrev);

const playListContainer = document.querySelector('.play-list');
//let img = document.createElement("IMG");
//img.src = '../assets/img/greenResize35.png';

playList.forEach(el => {
        const li = document.createElement('li');
    li.classList.add('play-item');
    //li.append(img);
    li.addEventListener('click', playIt);
    li.textContent = el.title;
    playListContainer.append(li);
    
});
 //li.appendChild(img);

audio.addEventListener('ended', function () {
    reset();
    audio.currentTime = 0;
    playNext();
});

const playItems= document.querySelectorAll('.play-item');
let playItemsArr = Array.from(playItems);
//let Index = 0;
//playItemsArr.forEach((el, index) => {
   // el.addEventListener('click', () => {
    //    console.log(index);
    //Index = index;
   // });
//});  
 


function playIt() {
    if (!isPlay) {
        if (playNum === playItemsArr.indexOf(this)){
            playAudio();
        } else {
    
    playNum = playItemsArr.indexOf(this);
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    playItems[playNum].classList.toggle('item-active');
    track_name.textContent =  playList[playNum].title;
    now_playing.textContent = "Playing " + `${playNum +1}` + " of " + `${playList.length}`;
    duration.textContent = playList[playNum].duration;
    updateTimer = setInterval(seekUpdate, 1000);
        }
} else {
   
    audio.pause();
    isPlay = false
    playBtn.classList.toggle('pause');
    playItems[playNum].classList.toggle('item-active');
}       
}

let updateTimer;
let track_name = document.querySelector('.track-name');
let now_playing = document.querySelector('.now-playing');

let seek_slider = document.querySelector('.seek_slider');
//let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let duration = document.querySelector('.duration');


document.seekTo = function () {
   let seekto = audio.duration * (seek_slider.value / 100);
   audio.currentTime = seekto;
   return seekto
};



const volumeSlider = document.querySelector('.volume_slider');
function setAttributes(el, attrs) {
    for(var key in attrs){
    el.setAttribute(key, attrs[key]);
    }   }

setAttributes(volumeSlider, { "type": "range", "min": "0", "max": "1", "step": "any", "value": "1" });
volumeSlider.addEventListener("input", function(){ 
    audio.volume = volumeSlider.value; })


function reset(){
    curr_time.textContent = "00:00";
    duration.textContent = "00:00";
    seek_slider.value = 0;
}

function seekUpdate() {
    let seekPosition = 0;
   
    // Check if the current track duration is a legible number
    if (!isNaN(audio.duration)) {
      seekPosition = audio.currentTime * (100 / audio.duration);
      seek_slider.value = seekPosition;
   
      // Calculate the time left and the total duration
      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(audio.duration / 60);
      let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
   
      // Add a zero to the single digit time values
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   
      // Display the updated duration
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      duration.textContent = durationMinutes + ":" + durationSeconds;
    
    }
  }

  function setPlayerLang () {
    language ==="Ru" ? now_playing.textContent = "Дорожка " + `${playNum + 1}` + " из " + `${playList.length}`: now_playing.textContent = "Playing " + `${playNum + 1}` + " of " + `${playList.length}`;
   // language ==="Ru" ? trackName.textContent = "Название дорожки" : trackName.textContent = "Track name";
}
setPlayerLang ()

let mute = document.querySelector('.fa-volume-mute');
mute.onclick = function() {
    if (audio.muted === true) {
           audio.muted = false;
    } else {
         audio.muted = true;
    }
    mute.classList.toggle('active');
  }
 
let gear = document.querySelector('.gear');
let popup = document.querySelector('.popup');
let croce = document.querySelector('.croce');
gear.addEventListener('click', function(){
	gear.classList.toggle('active');
        popup.classList.toggle('active');
        croce.classList.toggle('active');
})
croce.addEventListener('click', function(){
	gear.classList.toggle('active');
        popup.classList.toggle('active');
        croce.classList.toggle('active');
})

const main = document.querySelector('main');
const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const switches = document.querySelector('.switches');
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(main);
	const withinBoundaries2 = e.composedPath().includes(footer);
    const withinBoundaries3 = e.composedPath().includes(switches);
    const withinBoundaries4 = e.composedPath().includes(header)
 
	if ( (!e.composedPath().includes(switches) && withinBoundaries)  || withinBoundaries2) {
		popup.classList.remove('active')
		croce.classList.remove('active'); 
        gear.classList.remove('active'); 
	}
})



const state = [{
    language: 'en',
    photoSource: 'Github',
    showItems: ['Выбор языка', 'Погода','Время','Приветствие', 'Цитаты', "Источник картинки", 'Выберите тэг картинки', 'Плеер', 'Список дел']
  },
  {showItems: ['Select Language', 'Show/Hide Weather','Show/Hide Time','Show/Hide Greetings', 'Select image tag', 'Show/Hide Quotes', "Select image source", 'Show/Hide Player', 'Show/Hide ToDo']

  },
  {Settings: ["Настройки", "Settings"]

  },
{show_language: 'Выберите язык', 
show_weather: 'Показать/скрыть погоду',
show_time: 'Показать/скрыть время', 
show_greetings: 'Показать/скрыть приветствие', 
show_quotes: 'Показать/скрыть цитаты', 
show_player: 'Показать/скрыть плеер', 
show_todo: 'Показать/скрыть список дел'}
]
const settingsTitle = document.querySelector('.popup__title');
function changeTitle () {
    language ==="Ru" ? settingsTitle.textContent = state[2].Settings[0] : settingsTitle.textContent = state[2].Settings[1]

}
changeTitle ()

const showItems = document.querySelectorAll('.show-item');
const showItemsArr = Array.from(showItems);

function changeSetLang() {
    if (language === "Ru") {
        for(let i=0; i < showItemsArr.length; i++) {
            showItemsArr[i].textContent = state[0].showItems[i];
    
        }
      } else{
        for(let i=0; i < showItemsArr.length; i++) {
            showItemsArr[i].textContent = state[1].showItems[i];
               }
      }
    }

    
    changeSetLang()
    


const quoteWrapper = document.querySelector('.quote-wrapper');
 const quotesOn = document.querySelector('.quotesOn');
 const quotesOff = document.querySelector('.quotesOff');
 let quotesState = "On";
 let greetingsState = "On";
 let playerState = "On";
 let weatherState = "On";
 let timeState = "On";
 let todoState = "On";
 quotesOn.classList.add('active');
 
 window.addEventListener('beforeunload', setLocalSetStorage);
 window.addEventListener('load', getLocalSetStorage);
 

 quotesOff.addEventListener('click', function(){
    quotesState = "Off";
    setQuotes ()
    return quotesState;
});
quotesOn.addEventListener('click', function(){
    quotesState = "On";
    setQuotes ()
    return quotesState;
 });

function setQuotes () {
   
if (quotesState === "Off"){
    quotesOff.classList.add('active');
    quotesOn.classList.remove('active');
    quoteWrapper.classList.add('active');
       
 } else if (quotesState === "On"){
    quotesOn.classList.add('active');
    quotesOff.classList.remove('active');
    quoteWrapper.classList.remove('active');
      
}}


function setLocalSetStorage() {
    localStorage.setItem('quotesState', quotesState);
    localStorage.setItem('greetingsState', greetingsState);
    localStorage.setItem('playerState', playerState);
    localStorage.setItem('weatherState', weatherState);
    localStorage.setItem('timeState', timeState);
    localStorage.setItem('todoState', todoState);
}

function getLocalSetStorage() {
    if (localStorage.getItem('quotesState')) {
        quotesState = localStorage.getItem('quotesState');
    } 
    setQuotes ();
    if (localStorage.getItem('greetingsState')) {
        greetingsState = localStorage.getItem('greetingsState');
    } 
    setGreetings ();

    if (localStorage.getItem('playerState')) {
        playerState = localStorage.getItem('playerState');
    } 
   setPlayer ();

   if (localStorage.getItem('weatherState')) {
        weatherState = localStorage.getItem('weatherState');
   } 
   setWeather();

    if (localStorage.getItem('timeState')) {
   timeState = localStorage.getItem('timeState');
        } 
    setTime();
    if (localStorage.getItem('todoState')) {
        todoState = localStorage.getItem('todoState');
    } 
  setTodo();
}



const greetingsCont = document.querySelector('.greeting-container');
const greetingsOn = document.querySelector('.greetingsOn');
const greetingsOff = document.querySelector('.greetingsOff');
greetingsOn.classList.add('active');

 greetingsOff.addEventListener('click', function(){
    greetingsState = "Off";
    setGreetings ();
    console.log(greetingsState);
    return greetingsState;
});
    greetingsOn.addEventListener('click', function(){
    greetingsState = "On";
    setGreetings ();
    console.log(greetingsState);
    return greetingsState;
 });

function setGreetings () {
    if (greetingsState === "Off"){
    greetingsOff.classList.add('active');
    greetingsOn.classList.remove('active');
    greetingsCont.classList.add('active');
    
    } else  if (greetingsState === "On"){
    greetingsOn.classList.add('active');
    greetingsOff.classList.remove('active');
    greetingsCont.classList.remove('active');
    
}}

const player =  document.querySelector('.player');
const playerOn = document.querySelector('.playerOn');
const playerOff = document.querySelector('.playerOff');
playerOn.classList.add('active');

playerOff.addEventListener('click', function(){
    playerState = "Off";
	setPlayer ()
    return playerState;
 })
 playerOn.addEventListener('click', function(){
    playerState = "On";
	setPlayer ();
    return playerState;
 })

 function setPlayer () {
    if (playerState === "Off") {
     playerOff.classList.add('active');
     playerOn.classList.remove('active');
     player.classList.add('active');
     console.log(playerState);

    } else  if (playerState === "On"){
        playerOn.classList.add('active');
        playerOff.classList.remove('active');
        player.classList.remove('active');
   }
}

const weather = document.querySelector('.weather');
const weatherOn = document.querySelector('.weatherOn');
const weatherOff = document.querySelector('.weatherOff');
weatherOn.classList.add('active');

weatherOff.addEventListener('click', function(){
    weatherState= "Off"
	    setWeather ();
    return weatherState;
 })
 weatherOn.addEventListener('click', function(){
    weatherState= "On"
	    setWeather ();
    return weatherState;
 })
 
 function setWeather () {
    if (weatherState === "Off") {
        weatherOff.classList.add('active');
        weatherOn.classList.remove('active');
        weather.classList.add('active');
     

    } else  if (weatherState === "On"){
        weatherOn.classList.add('active');
    weatherOff.classList.remove('active');
    weather.classList.remove('active');
       
   }
}


 const dayDate = document.querySelector('.date');
 const timeOn = document.querySelector('.timeOn');
const timeOff = document.querySelector('.timeOff');
timeOn.classList.add('active');

timeOff.addEventListener('click', function(){
    timeState = "Off";
	
    setTime ();
    return timeState;
 })
 timeOn.addEventListener('click', function(){
    timeState = "On"
	
    setTime ();
    return timeState;
 })
 function setTime () {
    if (timeState === "Off") {
        timeOff.classList.add('active');
    timeOn.classList.remove('active');
    time.classList.add('active');
    dayDate.classList.add('active');
     

    } else  if (timeState === "On"){
        timeOn.classList.add('active');
        timeOff.classList.remove('active');
        time.classList.remove('active');
        dayDate.classList.remove('active');
   }
}

const toDo = document.querySelector('.todo-wrapper');
const todoOn = document.querySelector('.todoOn');
const todoOff = document.querySelector('.todoOff')

todoOn.classList.add('active');

todoOff.addEventListener('click', function(){
	todoState = "Off";
    setTodo ();
    return todoState;
 })
 todoOn.addEventListener('click', function(){
	todoState = "On";
    setTodo ();
    return todoState;
 })
 function setTodo () {
    if (todoState === "Off") {
        todoOff.classList.add('active');
    todoOn.classList.remove('active');
    toDo.classList.add('active');

    } else  if (todoState === "On"){
        todoOn.classList.add('active');
        todoOff.classList.remove('active');
        toDo.classList.remove('active');
       
   }
}

const todoTitle = document.querySelector(".todo-title");
 const submitForm = document.querySelector(".add");
 const addButton = document.querySelector(".add-todo");
 const todoList = document.querySelector(".todos");
 const list = document.querySelectorAll(".todos li");
 
 const lang = language;

 function setTodoLang() {
 if (language === "Ru") {
    todoTitle.textContent = "Список дел";
 } if (language === "En") {
    todoTitle.textContent = "ToDo List"
 }
}
setTodoLang();
 //let date = new Date();
 
 let dayName = date.toLocaleString(lang, {
   weekday: "long"
 });
 
 let listLenght = list.lenght;
 
 const generateTempalate = (todo) => {
   const html = `<li> 
                   <input type="checkbox" id="todo_${listLenght}">
                   <label for="todo_${listLenght}">
                     <span class="check"></span>
                     ${todo}
                   </label>
                   <i class="far fa-trash-alt delete"></i>
                 </li>`;
   todoList.innerHTML += html; // добавим новую лишку в index.html
 };
 
 function addTodos(e) {
   e.preventDefault();
   const todo = submitForm.add.value.trim();
   if (todo.length) {
     listLenght = listLenght + 1;
     generateTempalate(todo);
     submitForm.reset();
   }
 }
 
 submitForm.addEventListener("submit", addTodos); // можно добавлять клавишей "Ввод"
 addButton.addEventListener("click", addTodos); // можно добавлять плюсом
 
 function deleteTodos(e) { // определяем элемент к удалению по месту клика
   if (e.target.classList.contains("delete")) {
     e.target.parentElement.remove();
   }
 }
 
 todoList.addEventListener("click", deleteTodos); // клик по мусорному ведру
  


//const list = [
   // {
     //  En: ['morning', 'afternoon', 'evening', 'night'],
      // Ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']
    // },
    // {
    //  url: `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=3a1b915768c912a017bc99063d148140&units=metric`
   //   },
      //{
     //textWind: `Скорость ветра: ${(Math.round(data.wind.speed))} м/с,`
     //},
    // {   
      //humidity: `Влажность: ${(Math.round(data.main.humidity))}%`
   //  },
  
 // ]


    
    
    
  

