let a= document.getElementById("box");
let myfunction =async()=>{
    let reponse=await fetch("https://api.open-meteo.com/v1/forecast?latitude=24.8607,31.5204,33.6844,34.0151,30.1798,30.1575&longitude=67.0011,74.3587,73.0479,71.5249,66.9750,71.5249&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia%2FKarachi");

let result= await reponse.json()  
console.log(result)
result.forEach((e,i)=> {
    a.innerHTML += `<div class="temp"><h1> Temperature:${e.current.temperature_2m}</h1>
    <h2> humidity=${e.current.relative_humidity_2m
}</h2>
    <h2>wind speed =${e.current.wind_speed_10m}</h2>
    <h3>Time=${e.current.time}</h3>

    <h3>Region=${e.timezone}</h3>
    </div>
    `
    
});

console.log(result)
}
myfunction()
