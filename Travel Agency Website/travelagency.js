let form = document.getElementById("form")
let scrolldown = document.getElementById("scrolldown")
let searchbar = document.getElementById("searchbar")
let newdiv = document.getElementById("scrolldown")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    newdiv.classList.add("color")
})
newdiv.addEventListener('click', () => {
    newdiv.classList.remove("color")
})

let buttonweather = document.getElementById("weather");
let cityName = document.querySelector(".cityname");
let weatherbody = document.querySelector(".weatherbody");

buttonweather.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchbar.value + '&appid=511e5f562c46dbf8c9d1f7f4f971974e')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description']
            cityName.innerHTML = cityValue;
            weatherbody.innerHTML = "<b>Weather:</b> " + tempValue + " | " + "<b>Sky Condition:</b> " + descValue;
        })
        .catch(err => alert("Please put it in a valid city name" + err))
})


