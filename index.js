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
  github: "https://github.com/rfilaxwy",
  linkedin: "https://www.linkedin.com/in/ryan-filax-wylie",
  "project un": "www.ryanfw.ca",
  "project deux": "www.cloudtest.ca"
};

for (let i = 0; i < skills.length; i++) {
  let liString;
  var node = document.createElement("LI");
  if (i !== skills.length - 1) {
    liString = skills[i] + "|";
  } else {
    liString = skills[i];
  }

  textnode = document.createTextNode(liString);
  node.appendChild(textnode);
  document.getElementById("skills").appendChild(node);
}

for (let contact in contacts) {
  var node = document.createElement("A");
  var textnode = document.createTextNode(contact);
  node.appendChild(textnode);
  node.href = contacts[contact];
  node.target = 'target="_blank';
  document.getElementById("contact").appendChild(node);
}
