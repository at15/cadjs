/**
 * Created by gpl on 15/11/30.
 */

// Creates canvas
var paper = Raphael(document.getElementById("canvas-con"), 500, 500);
// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");
// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

// Add listener for click on canvas
// TODO: wrap it in a angular service? but it may be very low efficient
//Register Event
$("#canvas-container").click(CanvasClick);

//Event Handler
function CanvasClick(e) {
    if (e.target.nodeName == "svg") {
        //This will only occur if the actual canvas area is clicked, not any other drawn elements
        console.log(" got u clicking canvas !");
    }
    //console.log(" got u clicking canvas anyway !");
}