var link = document.querySelector(".nav-login");
var popup = document.querySelector(".modal-login");
var wrapper = document.querySelector(".site-wrapper");

var email = popup.querySelector("[name=email]");
var password = popup.querySelector("[name=password]");
var login_form = document.querySelector(".login-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    email.value = storage;
    password.focus();
  } else {
    email.focus();
  }
});

wrapper.addEventListener("click", function() {
  if ((event.target!==link)&&(popup.classList.contains("modal-show"))) {
    popup.classList.remove("modal-show");
  }
});

login_form.addEventListener("submit", function (evt) {
  if (!email.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести почту и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt){
  if (evt.keyCode===27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
})


var feedbackButton = document.querySelector(".contact-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var name = feedbackPopup.querySelector("[name=name]");
var closeButton = feedbackPopup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeButton.addEventListener("click", function() {
  feedbackPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function() {
  if (feedbackPopup.classList.contains("modal-show")) {
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt){
  if (evt.keyCode===27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
})
