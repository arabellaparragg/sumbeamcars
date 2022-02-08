fetch("https://arabellaparragg.github.io/test/cars.json")
.then(function (data) { // *** Waiting for the server to respond (promise)
    return data.json();
})
 
 


.then(function ShowCars(post) { // *** If the server responds in a positive way...
    // ***** "POST"   is all JSON data *****
        const outputresults = document.getElementById("results");
        const outputothers = document.getElementById("others");
        for (const car of cars) {
            output.insertAdjacentHTML("beforeend", `${feature.properties.status}  ${feature.properties.adresse}  <br>` )
        }
}
)



    const output = document.getElementById("output");
    const features = post.features; // *** Make an object list from json data list
    for (const feature of features) {
        output.insertAdjacentHTML("beforeend", `${feature.properties.status}  ${feature.properties.adresse}  <br>` )
    }

if ( ${make} === "audi") {
    output.insertAdjacentHTML("beforeend", )
}
    

