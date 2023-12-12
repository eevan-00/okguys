document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.href;

    if (currentPage.includes("contact.html")) {
        document.body.classList.add("contact-page");
    } else if (currentPage.includes("index.html")) {
        document.body.classList.add("index-page");
    }

    var contactButton = document.querySelector(".contact-button");
    var buttonText = contactButton.querySelector(".button-text"); 

    contactButton.addEventListener("mouseenter", function () {
        if (document.body.classList.contains("contact-page")) {
            buttonText.textContent = "BACK";
        } else if (document.body.classList.contains("index-page")) {
            buttonText.textContent = "Contact";
        }
    });

   
    contactButton.addEventListener("mouseleave", function () {
        buttonText.textContent = ""; 
    });
	
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
});

$(document).ready(function(){
    $.getJSON("testjson.json", function(data){
        $('.percentage').html(data.percentage);
        console.log(data);
    }).fail(function(){
        console.log("json retrieval failed");
    });
});

 function initMap() {
    
    var redDeerLatLng = { lat: 52.2681, lng: -113.8113 };


    var mymap = L.map('map').setView(redDeerLatLng, 12); 

 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);


    }

