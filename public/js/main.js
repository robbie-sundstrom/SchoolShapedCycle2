var myVar = setInterval(updateFacts, 5000);
var facts = ["Computer passwords are one example of codes", 
"Learn more about different secret codes " +  setupLinks("here", "https://sites.google.com/site/codesforscouts/home"),
"The field of making and breaking codes is called cryptography"];
var index = 0;

function setupLinks(str, link) {
  var result = str.link(link);
  return result
}

function updateFacts() {
  document.getElementById("facts").innerHTML = facts[index];
  index = (index + 1)%2;
}

