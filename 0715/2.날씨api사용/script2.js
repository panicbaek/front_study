const select = document.querySelector('select');


const show1 = document.querySelector('.show1');
const show2 = document.querySelector('.show2');
const show3 = document.querySelector('.show3');
const show4 = document.querySelector('.show4');
const show5 = document.querySelector('.show5');

const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

select.addEventListener('change', ()=> {

  console.log(select)
  const name = select.value
  const lat = countryCoordinates[name].latitude;
  const lon = countryCoordinates[name].longitude
  const APIKEY = '57388f5537da4cf7daca539f7fe4a995'
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
  
  fetch(URL)
    .then( response => response.json())
    .then(data => {
      console.log(data)
      
      const main = data.weather[0].main
      const id = data.weather[0].id
      const description = data.weather[0].description
      const feels = data.main.feels_like;
      const clouds = data.clouds.all


      show1.innerHTML = main;
      show2.innerHTML = id;
      show3.innerHTML = description;
      show4.innerHTML = feels;
      show5.innerHTML = clouds;
      

    })

  
  


})


