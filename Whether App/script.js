
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search_btn");
const weatherCard = document.querySelector(".weather--details-cont");
const hambergur = document.querySelector(".hambergur");
const hambergur_bars = document.querySelectorAll(".bar");
const navbar_menu_links = document.querySelector(".navbar--menu-cont");

const home = document.querySelector("#active-link");
const humidity = document.querySelector("#humidity");
const speed = document.querySelector("#speed");
const sunrise_sunset = document.querySelector("#sunrise-sunset");
const lat_alt = document.querySelector("#lat-alt");


const overlay = document.querySelector(".overlay");
overlay.addEventListener('click',()=>{
    for(let i=0; i<hambergur_bars.length; i++)
    {
        hambergur_bars[i].classList.toggle("active");
    }
    navbar_menu_links.classList.toggle("menu-toggle");
    overlay.classList.toggle("overlay-back");
});

// Hambergur functionality
hambergur.addEventListener("click",()=>{
    for(let i=0; i<hambergur_bars.length; i++)
    {
        hambergur_bars[i].classList.toggle("active");
    }
    overlay.classList.toggle("overlay-back");
    navbar_menu_links.classList.toggle("menu-toggle");
    
})









// Function for fetching the data from the api  (Home)
const fetchData = (city)=>{

    Api_key = '345ae0ceb61ee0332049e5bda0a04be3';
    const request = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`);
    request.then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        
        const date = new Date();
        let day = date.getUTCDay();
        let month = date.getUTCMonth();
        let currentDate = date.getUTCDate();
        let year = date.getUTCFullYear();
        let weatherImg;

        if(data.weather[0].main == "Clouds")
        {
            weatherImg = "./Images/cloud-computing.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherImg = "./Images/rain.png";
        }
        else if(data.weather[0].main == "Haze")
        {
            weatherImg = "./Images/fog.png";

        }
        else if(data.weather[0].main == "Mist")
        {
            weatherImg =  "./Images/foggy.png";
        }
        else{
            weatherImg = "./Images/sun.png";
        }


        console.log(month)
          

            switch(day)
            {
                case 0 : day = "Sunday";
                        break;

                case 1 : day = "Monday";
                        break;

                case 2 : day = "Tuesday";
                        break;

                case 3 : day = "Wednesday";
                        break;

                case 4 : day = "Thursday";
                        break;

                case 5 : day = "Friday";
                        break;

                case 6 : day = "Saturday";
                        break;

            }


            switch(month)
            {
                case 0 : month = "January";
                         break;
                
                case 1 : month = "February";
                         break;

                case 2 : month = "March";
                         break;
               
                case 3 : month = "April";
                         break;

                case 4 : month = "May";
                         break;
                
                case 5 : month = "June";
                         break;

                case 6 : month = "July";
                         break;
               
                case 7 : month = "August";
                         break;

                case 8 : month = "September";
                         break;
                
                case 9 : month = "Auctober";
                         break;

                case 10 : month = "November";
                         break;
               
                case 11 : month = "December";
                         break;
                
            }

        // <div id="icon"><img id="wicon" src="" alt="Weather icon"></div>
        // var iconcode = data.weather[0].icon;
        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        const Home = `
        <div class="weather--details-city-heading-cont">
            <h2 class="weather--details-city-heading">
                ${data.name}
            </h2>
        </div>

        <div class="weather--details-img-cont" >
            <img src=${weatherImg} alt="">
        </div>

        <div class="weather--details-temp-cont">
            <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
        </div>

        <div class="weather--details-wather-cont">
            <h4 class="weather--details-wather">${data.weather[0].main}</h4>
        </div>

        <div class="weather--details-min-max-cont">
            <h3>Min: <span id="min-temp">${((data.main.temp_min)-(273.15)).toFixed(0)}</span><sup class="min-max-degree-icon">o</sup>C</h3>
            <h3>Max: <span id="max-temp">${((data.main.temp_max)-(273.15)).toFixed(0)}</span><sup class="min-max-degree-icon">o</sup>C</h3>
        </div>

        <div class="weather--details-date-cont">
        <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
        </div>

        <div class="circle1 circle"></div>
        <div class="circle2 circle"></div>
        <div class="circle3 circle"></div>

         `;
         weatherCard.insertAdjacentHTML("afterbegin",Home);

     
         home.addEventListener('click',()=>{
            const Home = `
        <div class="weather--details-city-heading-cont">
            <h2 class="weather--details-city-heading">
                ${data.name}
            </h2>
        </div>

        <div class="weather--details-img-cont" >
            <img src=${weatherImg}  alt="">
        </div>

        <div class="weather--details-temp-cont">
            <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
        </div>

        <div class="weather--details-wather-cont">
            <h4 class="weather--details-wather">${data.weather[0].main}</h4>
        </div>

        <div class="weather--details-min-max-cont">
            <h3>Min: <span id="min-temp">${((data.main.temp_min)-(273.15)).toFixed(0)}</span><sup class="min-max-degree-icon">o</sup>C</h3>
            <h3>Max: <span id="max-temp">${((data.main.temp_max)-(273.15)).toFixed(0)}</span><sup class="min-max-degree-icon">o</sup>C</h3>
        </div>

        <div class="weather--details-date-cont">
        <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
        </div>

        <div class="circle1 circle"></div>
        <div class="circle2 circle"></div>
        <div class="circle3 circle"></div>

         `;
         weatherCard.insertAdjacentHTML("afterbegin",Home);
         });
       
         humidity.addEventListener('click',()=>{

             const Humidity = 
            `
            <div class="weather--details-city-heading-cont">
                <h2 class="weather--details-city-heading">
                    ${data.name}
                </h2>
            </div>
    
            <div class="weather--details-img-cont" >
                <img src=${weatherImg}  alt="">
            </div>
    
            <div class="weather--details-temp-cont">
                <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
            </div>
    
            <div class="weather--details-wather-cont">
                <h4 class="weather--details-wather">${data.weather[0].main}</h4>
            </div>
    
            
            <div class="humidity">
               <p> Humidty : ${data.main.humidity}</p>
            </div>

            <div class="weather--details-date-cont">
               <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
            </div>
    
            <div class="circle1 circle"></div>
            <div class="circle2 circle"></div>
            <div class="circle3 circle"></div>
    
             `;
         weatherCard.insertAdjacentHTML("afterbegin",Humidity);
        });




        speed.addEventListener('click',()=>{

            const Speed = 
           `
           <div class="weather--details-city-heading-cont">
               <h2 class="weather--details-city-heading">
                   ${data.name}
               </h2>
           </div>
   
           <div class="weather--details-img-cont" >
               <img src=${weatherImg}  alt="">
           </div>
   
           <div class="weather--details-temp-cont">
               <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
           </div>
   
           <div class="weather--details-wather-cont">
               <h4 class="weather--details-wather">${data.weather[0].main}</h4>
           </div>
   
           
           <div class="humidity">
              <p> Speed : ${data.wind.speed}</p>
           </div>

           <div class="weather--details-date-cont">
              <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
           </div>
   
           <div class="circle1 circle"></div>
           <div class="circle2 circle"></div>
           <div class="circle3 circle"></div>
   
            `;
        weatherCard.insertAdjacentHTML("afterbegin",Speed);
       });




       lat_alt.addEventListener('click',()=>{

        const Lat_Lon = 
       `
       <div class="weather--details-city-heading-cont">
           <h2 class="weather--details-city-heading">
               ${data.name}
           </h2>
       </div>

       <div class="weather--details-img-cont" >
           <img src=${weatherImg}  alt="">
       </div>

       <div class="weather--details-temp-cont">
           <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
       </div>

       <div class="weather--details-wather-cont">
           <h4 class="weather--details-wather">${data.weather[0].main}</h4>
       </div>

       
       <div class="lat-long">
       <h3>Lat: <span id="min-temp">${data.coord.lat.toFixed(2)}</h3>
       <h3>Lng: <span id="max-temp">${data.coord.lon.toFixed(2)}</h3>
   </div>

       <div class="weather--details-date-cont">
          <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
       </div>

       <div class="circle1 circle"></div>
       <div class="circle2 circle"></div>
       <div class="circle3 circle"></div>

        `;
    weatherCard.insertAdjacentHTML("afterbegin",Lat_Lon);
   });





   sunrise_sunset.addEventListener('click',()=>{

    const Sunrise_Sunset = 
   `
   <div class="weather--details-city-heading-cont">
       <h2 class="weather--details-city-heading">
           ${data.name}
       </h2>
   </div>

   <div class="weather--details-img-cont" >
       <img src=${weatherImg}  alt="">
   </div>

   <div class="weather--details-temp-cont">
       <h1 class="weather--details-temp"><span id="temp">${((data.main.temp)-(273.15)).toFixed(0)}</span><sup id="degree-icon">o</sup>C</h1>
   </div>

   <div class="weather--details-wather-cont">
       <h4 class="weather--details-wather">${data.weather[0].main}</h4>
   </div>

   
   <div class="sunrise-sunset">
   <h3 class="surise-sunset-child"> Sunrise : ${data.sys.sunrise}</h3>
   <h3 class="surise-sunset-child"> Sunset : ${data.sys.sunset}</h3>
</div>

   <div class="weather--details-date-cont">
      <p><span id="day">${day}</span> , <span id="month">${month}</span><span id="date"> ${currentDate} , </span><span id="year">${year}</span></p>
   </div>

   <div class="circle1 circle"></div>
   <div class="circle2 circle"></div>
   <div class="circle3 circle"></div>

    `;
weatherCard.insertAdjacentHTML("afterbegin",Sunrise_Sunset);
})


    })
    .catch((err)=>{
        alert("Enter the correct city name ");
    })


}





fetchData(`Yavatmal`);
searchBtn.addEventListener("click",()=>{
    let city = searchBox.value;
    fetchData(`${city}`);
});


window.addEventListener('keypress',(e)=>
{
    if(e.key == "Enter")
    {
        fetchData(searchBox.value);
    }
})