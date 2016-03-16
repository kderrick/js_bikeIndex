var Bike = require('./../js/bike.js').Bike;

$(document).ready(function() {
  $('#buttonSubmit').click(function() {
    var searchCity = $('#searchCity').val();
    var searchState = $('#searchState').val();
    var searchBrand = $('#searchBrand').val();
    var searchColor = $('#searchColor').val();
    var newBike = new Bike(searchBrand, searchColor, searchCity, searchState);
    $('#searchCity').val(""); // clears the value inside input box
    $('#searchState').val("");
    $('#searchBrand').val("");
    $('#searchColor').val("");

    $('.showBike').html("<p>Your search results: </p>" + "<p> Brand: " + newBike.brand + "</p>" + "<p>Color: " + newBike.frameColor + "</p>" + "<p>City: " + newBike.city + "</p>" + "<p>State: " + newBike.state + "</p>");

    $.get('https://bikeindex.org:443/api/v2/bikes_search?page=1&per_page=100&colors=' + newBike.frameColor + '&manufacturer=' + newBike.brand + '&proximity=' + newBike.city + '%2C%20' + newBike.state + '&access_token=2snw8x3hz9tiuh9gek0lca', function(response) {
      for(var i = 1; i <= response.bikes.length; i++) {
        $(".showResult").append(response.bikes[i].manufacturer_name + " " + response.bikes[i].stolen_location + " " + response.bikes[i].frame_colors + " ");
      }
      // console.log(response.bikes);
      // $(".showResult").text(response.bikes);

    });

  });
});
