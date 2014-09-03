

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});



// Get the context of the canvas element we want to select
// var ctx = document.getElementById("myScore").getContext("2d");
// var myNewChart = new Chart(ctx).PolarArea(data);

// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myScore").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
// var myNewChart = new Chart(ctx);

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]



// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Doughnut(data);


