document.addEventListener("DOMContentLoaded", function () {
    // Your OpenWeatherMap API key
    const apiKey = "a6eeeb35a51babb405321d4ed3435dc8";
    const form = document.querySelector(".temp_form");
    const cityNameInput = document.getElementById("cityName");
    const weatherInfo = document.querySelector(".tempInformation");
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("today_data");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const cityName = cityNameInput.value;
  
      // Construct the API URL
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
      try {
        // Fetch weather data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        // Update HTML with weather data
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const city = data.name;
  
        // Get the current date and format it
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
  
        dayElement.textContent = formattedDate;
        dateElement.textContent = city;
  
        document.getElementById("temp").innerHTML = `${Math.round(temperature - 273.15)} <sup>°C</sup>`;
        document.getElementById("temp_status").textContent = weatherDescription;
        weatherInfo.classList.remove("data_hide");
      } catch (error) {
        console.error("Error fetching weather data: ", error);
        alert("City not found. Please try again.");
      }
    });
  });
  
  

