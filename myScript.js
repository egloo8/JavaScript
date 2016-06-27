function submitForms() {
  var service;
  var customer;
  var title;
  var fName;
  var lName;
  var alertString;
  var fullname;
  var i;
  for (i = 0; i < document.form1.services.length; i++){
    if (document.form1.services[i].checked){
      service = document.form1.services[i].value;
    }
  }
  for (i = 0; i < document.form2.customers.length; i++){
    if (document.form2.customers[i].checked){
      customer = document.form2.customers[i].value;
    }
  }
  
  for (i = 0; i < document.form3.titles.length; i++){
    if (document.form3.titles[i].checked){
      title = document.form3.titles[i].value;
    }
  }
  
  fName = document.form4[0].value;
  lName = document.form4[1].value;
  
  fullname = title + fName + lName;
  
  window.open("submit.html","_self");
  
}

function hideInfo(bool) {
  if (bool == 1){
    document.getElementById("form3").style.display="none";
	document.getElementById("form4").style.display="none"
  } else {
    document.getElementById("form3").style.display="block";
	document.getElementById("form4").style.display="block";
  }
}