const select = document.querySelector('select');

const show = document.querySelector('.show');
const show2 = document.querySelector('.show2');

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

  console.log(select);
  const name = select.value;
  const lat = countryCoordinates[name].latitude;
  const lon = countryCoordinates[name].longitude;
  const APIKEY = '57388f5537da4cf7daca539f7fe4a995'
  const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=$${lon}&exclude={part}&appid=${APIKEY}`
  console.log(URL)

  

  show.innerHTML = countryCoordinates[name].latitude;
  show2.innerHTML = countryCoordinates[name].longitude;

})


