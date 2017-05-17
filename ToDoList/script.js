function addItem(){

var a = document.getElementById("new_item").value;
document.getElementById("new_item").value = "";
var b = document.createTextNode(a);
var c = document.createElement("li");
  c.appendChild(b);
  document.getElementById("list").appendChild(c)
  
  var drop = document.getElementById("dropdown");
  var option = document.createElement("option");
  var abc = document.createTextNode(a);
  option.appendChild(abc);
  drop.appendChild(option);

}
