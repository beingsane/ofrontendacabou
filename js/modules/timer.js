const countDownDate = new Date("Mar 17, 2017 00:00:00").getTime();
const x = setInterval(() => {
  var now = new Date().getTime();
  var distance = now - countDownDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".timer").innerHTML = days + " dias, " + hours + " horas, "
  + minutes + " minutos e " + seconds + " segundos";
}, 1000);