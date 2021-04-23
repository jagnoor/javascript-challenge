// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufos report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// filter the data 

// var button = d3.select("#button");

// button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime.form-control");

//   // Get the value property of the input element
//   var inputValue = inputElement.date("value");

//   console.log(inputValue);
//   console.log();

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);