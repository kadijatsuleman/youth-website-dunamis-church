document.getAnimations("contact-form").onsubmit = function(e){
  e.preventdefault();
  document.getElementById("successMessage").innerHTML ="message delivered successfully"
  ;
  this .reset();
}
  

alert("message delivered successfully");

