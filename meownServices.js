 function initMap() {
    
    var redDeerLatLng = { lat: 52.2681, lng: -113.8113 };


    var mymap = L.map('map').setView(redDeerLatLng, 12); 

 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);


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
		 const percentage = data.percentage;
		 
		 $('.percentage').html(data.percentage);

		
		 $('#jsonout').html(`<strong>SALE!!:</strong> ${percentage}`);		 
		  $('#jsonout').css('color', 'red');
		   console.log(data);
    }).fail(function(){
        console.log("json retrieval failed");
    });
});
	

$(document).ready(function() {
  const xmlUrl = 'xmlTest.xml'; 


  $.get(xmlUrl, function(data) {
    const xmlDoc = $.parseXML(data);
    const $xml = $(xmlDoc);

    const names = $xml.find("name");
    const titles = $xml.find("title");

    const container = $("<div></div>"); 

    names.each(function(i) {
      const name = $(this).text();
      const title = titles.eq(i).text();

      const entry = $("<div></div>").html(`<strong>Name:</strong> ${name}, <strong>Title:</strong> ${title}`);
      container.append(entry);
    });

    $("#output").empty().append(container); 
  });
});




