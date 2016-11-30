// JavaScript Document
var feedback_btn = document.querySelector(".feedback-show");

var popup = document.querySelector(".feedback");
var close_btn = popup.querySelector(".modal-close-btn");

var modal_overlay = document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var useremail = popup.querySelector("[name=useremail]");
var usermsg = popup.querySelector("[name=usermessage]");

if (localStorage) {
  var storage_username = localStorage.getItem("username");
  var storage_useremail = localStorage.getItem("useremail");
}

feedback_btn.addEventListener("click", function(event) {
  event.preventDefault();
  modal_overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-show");

  if ((storage_username) && (storage_useremail)) {
    username.value = storage_username;
    useremail.value = storage_useremail;
    usermsg.focus();
  } else {
    username.focus();
  }

});

close_btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  modal_overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !useremail.value) {
    event.preventDefault();
  } else {
    if (localStorage) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("useremail", useremail.value);
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      modal_overlay.classList.remove("modal-overlay-show");
    }
  }
});


ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.9393, 30.3293],
        zoom: 16,
        controls: ['smallMapDefaultSet']
    }); 
    
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: 'Gllacy Shop',
        balloonContent: 'Магазин Глейси'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [218, 142],
        iconImageOffset: [-45, -140]
    });
    
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable(['scrollZoom']);
}

