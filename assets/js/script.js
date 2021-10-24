// variables
cityOutput = $("#cityoutput");
searchButton = $("#searchbtn");
cityHistory = $(".result");
currentDate = $("#date");
currentTemperature = $("#temp");
currentWind = $("#wind");
currentHumidity = $("#humid");
currentUv = $("#uv");

//change the current date
var today = moment().format("MMMM Do, YYYY");
currentDate.text(today);

// enter the city name and give it to the city
searchButton.on("click", function (event) {
  event.preventDefault();
  var buttonId = $(this).attr("id");
  var cityInput = $("#cityinput");
  cityOutput.text(cityInput.val());
  localStorage.setItem(buttonId, cityInput.val());
  history();
});

// console.log(cityHistory);
var check = false;
function history() {
  cityHistory.each(function () {
    var historyId = $(this).attr("id");
    if (check === false) {
      if ($(this).val() === null) {
        var newName = $(this).text(localStorage.getItem(historyId));
        check = true;
      }
    }

    console.log(historyId);
  });
}
