window.addEventListener('load',()=>{
    let lon;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let temperatureLocation=document.querySelector('.location');
    let humidity=document.querySelector('.humidity');
    let pressure=document.querySelector('.pressure');
    let visibility=document.querySelector('.visibility');
   


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(positon=>{
            lon=positon.coords.longitude;
            lat=positon.coords.latitude;


            
            const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=376c0136b95a89c555efbfdd3e27463d`;
            
            
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const temperature=data.current.temp;
                const temperatureDes=data.current.feels_like;
                const temperatureloc=data.timezone;
                const humidit=data.current.humidity;
                const press=data.current.pressure;
                const visible=data.current.visibility;
               
                
                // set  dom element from the api

                temperatureDegree.textContent=`TEMPERATURE  ${temperature-273.15}`;
                temperatureDescription.textContent=`FEELS LIKE:      ${temperatureDes-273.15} C`;
                temperatureLocation.textContent=`LOCATION:  ${temperatureloc}`;
                humidity.textContent =`HUMIDITY: ${humidit}`;
                pressure.textContent=`PRESSURE:  ${press}`;
                visibility.textContent=`VISIBILITY:  ${visible}`;


                
                
            

            });
        
        });

    }
});