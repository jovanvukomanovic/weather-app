const cityForm = document.querySelector('form');
const card = document.querySelector('.cardd');
const details = document.querySelector('.detailss');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');

console.log(card.classList);
console.log(details);


const updateUI = (data) => {
    console.log(data);
    

    const {cityDets,weather} = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnlishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `; 
console.log(cityDets.EnglisName);
    // update the night and day images




    // let  timeSrc = weather.IsDayTime ? 'vezbanja razna/day.jpg' : 'vezbanja razna/night.jpg';
    // time.setAttribute('src',timeSrc);



    // remove d-none if present 
    if(card.classList.contains('.d-none')){
        card.classList.remove('d-none');
        
    };

};

const updateCity = async (city) => {

const cityDets = await getCity(city);
const weather = await getWeather(cityDets.Key);

return{cityDets, weather};

};

cityForm.addEventListener('submit',e =>{
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();
console.log(city);
        // update ui with new city

updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


});
console.log(details);