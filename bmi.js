var x = document.querySelector("#height");
var y = document.querySelector("#weight");
var o = document.querySelector("#submi");
var u = document.querySelector("#sex");
var u1 = document.querySelector("#Name");

o.addEventListener("click", function () {
  var t = Math.round(
    (parseInt(y.value) / (parseInt(x.value) * parseInt(x.value))) * 10000
  );
  alert(`Thanks for using me...
Your BMI is ${t}, please check this to the standard table and will let your trainer`);
});
