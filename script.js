function switchTemp(e) {
    //this gets an array of all the temperatures from beginning to end
    var temps = document.querySelectorAll(".temps p");
    
    if (e.value === "F")
    {
        temps.forEach(element => {
            element.innerText = Math.round((element.innerText * 9/5) + 32);
        });
        //change to fahrenheit

    }
    else if (e.value === "C")
    {
        temps.forEach(element => {
            element.innerText = Math.round((element.innerText - 32) * 5/9);
        });
        //change to celcius
    }
}

function remCookie(e) {
    //e.parentNode.parentNode.remove();
    document.querySelector(".cookie").remove();
}

function changeCity(e) {
    var cityTemps = [
        { "city": "Burbank", "Today": [2, 1], "Tomorrow": [2, 1], "Friday": [2, 1], "Saturday": [2, 1]},
        { "city": "Chicago", "Today": [2, 1], "Tomorrow": [2, 1], "Friday": [2, 1], "Saturday": [2, 1]},
        { "city": "Dallas", "Today": [2, 1], "Tomorrow": [2, 1], "Friday": [2, 1], "Saturday": [2, 1]}
    ];
    
    //attempt at changing each temp using an object of other city temperatures
    //may be able to do with a regular for loop and a couple conditionals
    // var index = cityTemps.findIndex(item => item.city === e.innerText);
    // var days = document.querySelectorAll(".temps p");
    // days.forEach(element => {
    //     element.innerText = cityTemps[index].Today;
    // });

    alert("Loading weather report...");
    document.querySelector(".cityName").innerText = e.innerText;
}