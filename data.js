let carlist = [];

fetch("https://arabellaparragg.github.io/sumbeamcars/cars.json")
.then (function (data) {
    return data.json();
})

.then (function (post) {
carlist = post.carlist; 
})
.catch (function (error){
    const erorrdiv = document.getElementById("error");
    erorrdiv.innerHTML = "Service is not available";
})