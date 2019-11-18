const skills = [
  "javascript",
  "react.js",
  "node.js",
  "postgresql",
  "sass",
  "html",
  "python"
];

const contacts = {
  github: "",
  linkedin: "",
  "project un": "",
  "project deux": ""
};

for (let i = 0; i < skills.length; i++) {
  let liString;
  var node = document.createElement("LI");
  if (i !== skills.length - 1) {
    console.log(skills[i]);
    liString = skills[i] + "                                  |";
  } else {
    liString = skills[i];
  }

  textnode = document.createTextNode(liString);
  node.appendChild(textnode);
  document.getElementById("skills").appendChild(node);
}

for (let contact in contacts) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(contact);
  node.appendChild(textnode);
  document.getElementById("contact").appendChild(node);
}
