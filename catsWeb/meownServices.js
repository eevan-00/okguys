 function initMap() {
         // Specify the coordinates for Red Deer, Alberta, Canada
    var redDeerLatLng = { lat: 52.2681, lng: -113.8113 };

    // Create a map object and set its properties
    var mymap = L.map('map').setView(redDeerLatLng, 12); // Zoom level adjusted to your preference

    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

        // You can add markers, polygons, and more to the map here
    }
document.addEventListener('DOMContentLoaded', initMap);



document.addEventListener("DOMContentLoaded", function () {


var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var col2 = document.getElementsByClassName("collapsible-set");
var i2;
for (i2 = 0; i2 < col2.length; i2++) {
  col2[i2].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

});

$(document).ready(function(){
    $.getJSON("testjson.json", function(data){
        $('.percentage').html(data.percentage);
        console.log(data);
    }).fail(function(){
        console.log("json retrieval failed");
    });
});
	

$(document).ready(function() {
  const xmlString = `<?xml version="1.0" ?>
<management>
<teammember>
<name>Agnes</name>
<title>Vice President of Accounting</title>
<bio>With over 14 years of public accounting ...
</bio>
</teammember>

</management>
  `;

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const names = xmlDoc.querySelectorAll("name");
  const titles = xmlDoc.querySelectorAll("title");

  const container = document.createElement("div");

  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent;
    const title = titles[i].textContent;

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>Name:</strong> ${name}, <strong>Title:</strong> ${title}`;

    container.appendChild(entry);
  }

  $("#output").append(container);
});



