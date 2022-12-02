let btnSubmit = document.getElementById('submitBtn');
let msg ="Thank you for contacting us! You will receive an email in 3-4 working days.";
      
btnSubmit.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('userdetails').innerHTML = msg;
 
});