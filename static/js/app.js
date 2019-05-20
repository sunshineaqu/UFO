// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

for (var j = 0; j < tableData.length; j++) {
    var row = tbody.append("tr");
    row.append("td").text(tableData[j].datetime);
    row.append("td").text(tableData[j].city);
    row.append("td").text(tableData[j].state);
    row.append("td").text(tableData[j].country);
    row.append("td").text(tableData[j].shape);
    row.append("td").text(tableData[j].durationMinutes);
    row.append("td").text(tableData[j].comments);
  };

// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // remove the previous table row
  d3.select("tbody").selectAll("tr").remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);

  // var tbody = d3.select("tbody");
  for (var i = 0; i < filteredData.length; i++) {
    var row = tbody.append("tr");
    row.append("td").text(filteredData[i].datetime);
    row.append("td").text(filteredData[i].city);
    row.append("td").text(filteredData[i].state);
    row.append("td").text(filteredData[i].country);
    row.append("td").text(filteredData[i].shape);
    row.append("td").text(filteredData[i].durationMinutes);
    row.append("td").text(filteredData[i].comments);
  }
});

// indicate no matched result has been found

//   // BONUS: Calculate summary statistics for the age field of the filtered data
