//Elementi UI
const emailInput = document.getElementById("mailInput");
const sendBtn = document.getElementById("send");
const message = document.getElementById("message");

//Array mail autorizzate
const Authorizedmails = [
  "mrPink@gmail.com",
  "mrWhite@gmail.com",
  "mrBrown@gmail.com",
  "mrBlonde@gmail.com",
  "mrOrange@gmail.com",
  "mrBlue@gmail.com",
];

//Event listener pulsante invia
sendBtn.addEventListener("click", function () {
  for (let i = 0; i < Authorizedmails.length; i++) {
    //Se la mail è autorizzata
    if (emailInput.value === Authorizedmails[i]) {
      message.innerHTML =
        '<h2 class="text-success">Benvenuto! <i class="fa-regular fa-face-smile-beam"></i></h2>';

      //Reset input
      emailInput.value = "";

      break;
      //Se la mail non è autorizzata
    } else {
      message.innerHTML =
        '<h2 class="text-danger">Siamo spiacenti, email non autorizzata. <i class="fa-solid fa-ban"></i></h2>';
      //Reset input
      emailInput.value = "";
    }
  }
});
