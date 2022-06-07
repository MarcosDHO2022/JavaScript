//Code created by Fernando Pérez and Marcos Hernández  Date: 04/10/2021  Group: Juniors PM

document.getElementById("original").innerHTML = "Original: webmaster";

function alphabet_order(abc){
  abc = "webmaster";
  document.getElementById("ordered").innerHTML = "Ordered: " + abc.split('').sort().join('');
}

//EXTRA
function anyalphabet_order(anyabc){
  anyabc = String(prompt("Write the string: "));
  document.getElementById("anyoriginal").innerHTML = "Original: " + anyabc;
  document.getElementById("anyordered").innerHTML = "Ordered: " + anyabc.split('').sort().join('');
}
//END OF EXTRA

document.getElementById("orderabc").onclick = alphabet_order;
document.getElementById("anyorderabc").onclick = anyalphabet_order; //EXTRA
