// from data.js
var tableData = data;

// YOUR CODE HERE!

// Creating References to tbody, input and button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


//Create eventListener for button
button.on("click", () => {

  d3.event.preventDefault();
  var inputDate = inputFieldDate.property("value").trim();
  // console.log(inputDate)
  var inputCity = inputFieldCity.property("value").toLowerCase().trim();
  // console.log(inputCity)
  var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
  // console.log(filterDate)
  var filterCity = tableData.filter(tableData => tableData.city === inputCity);
  // console.log(filterCity)
  var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
  // console.log(filterCombinedData)
  $tbody.html("");
    let response = {
        filterDate, filterCity, filterCombinedData
    }
    if(response.filterCombinedData.length !== 0) {
      addData(filterCombinedData);
  }
  else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
    addData(filterDate) || addData(filterCity);
}
else {
  $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
}
})