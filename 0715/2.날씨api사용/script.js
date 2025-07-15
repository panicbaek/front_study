// 뭔가 원하는 정보를 가져오고 싶음 ( 나한테 없음 )
// 그럴때 남들이 만든거 (api)에서 가져옴
// 그냥 안줘서 apikey발급받고 가져옴
// 그럼 이제 정보를 가져와서 나한테 필요한 정보들만 다시 빼서 정리함 innerHTML으로 이쁘게 웹을 꾸밈

const weatherName = document.querySelector('.name');
const weatherTemp = document.querySelector('.temp');
const weatherDesc = document.querySelector('.desc');
const weatherImg = document.querySelector('img');

function connectGeo(position) { //위도야 경도를 볼 수 있는 함수
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(`위도:${lat} 경도:${lon}}`);

  const APIKEY = '57388f5537da4cf7daca539f7fe4a995'; //<내 회원정보에 있는 APIKEY
  // ? 뒤부터는 정보들을 보냄
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`
  
  fetch(URL)
  .then(response => response.json())
  .then(data => {

    console.log(data);
    
    const name = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherName.innerHTML = name;
    weatherTemp.innerHTML = temp;
    weatherDesc.innerHTML = desc;

    const iconURL = `https://openweathermap.org/img/wn/10d@2x.png`;

    weatherImg.setAttribute( 'src', iconURL)

  })
}

function errorGeo() {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo); // 위치 정보를 띄어주는 함수