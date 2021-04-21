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
let temp = document.querySelector(".temp")
let forecast = document.querySelector(".forecast")
let hilow = document.querySelector(".hilow")
let dateinput = document.querySelector(".date")
let weathericon = document.querySelector(".weathericon")
let secondPage = document.querySelector("#about")

buttonweather.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchbar.value + '&appid=511e5f562c46dbf8c9d1f7f4f971974e')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'] + "," + " " + data['sys']['country'];
            let tempValue = data['main']['temp'];
            let farenheit = ((tempValue - 273.15) * 1.8) + 32
            let high = ((data['main']['temp_max'] - 273.15) * 1.8) + 32
            let low = ((data['main']['temp_min'] - 273.15) * 1.8) + 32
            let descValue = data['weather'][0]['description'];
            let icon = data['weather'][0]['icon']
            cityName.innerHTML = cityValue;
            temp.innerHTML = Math.floor(farenheit) + "<span>&deg; F</span>";
            hilow.innerHTML = Math.floor(high) + "<span>&deg; f</span>" + " / " + Math.floor(low) + "<span>&deg; f</span>"
            forecast.innerHTML = descValue;
            weathericon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            let today = new Date();
            dateinput.innerHTML = dateDisplay(today);
            secondPage.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityValue + "')"
        })
        .catch(err => alert("Please put it in a valid city name" + err))
})

function dateDisplay(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

