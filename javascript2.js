const output = document.getElementById("results");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    let template ="merci";

for (const car of carlist) {
    template = `
    <section class="car">
        <div class="make">
        ${car.make} ${car.model}
    </div>
    <div class="category">
        ${car.category}
    </div>
    </section>`

    output.insertAdjacentHTML("beforeend,template")

}
})

//.then(function ShowCars(post) { // *** If the server responds in a positive way...
    // ***** "POST"   is all JSON data *****
//        const outputresults = document.getElementById("results");
//        const outputothers = document.getElementById("others");
//        for (const car of cars) {
//            output.insertAdjacentHTML("beforeend", `${feature.properties.status}  ${feature.properties.adresse}  <br>` )
//        }})



 //   const output = document.getElementById("output");
 //   const features = post.features; // *** Make an object list from json data list
 //   for (const feature of features) {
 //       output.insertAdjacentHTML("beforeend", `${feature.properties.status}  ${feature.properties.adresse}  <br>` )
 //   }

// if ( ${make} === "audi") {
 //   output.insertAdjacentHTML("beforeend", )}
//