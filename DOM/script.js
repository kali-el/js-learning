const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";

container.appendChild(blue);

const diva = document.createElement("div");
diva.classList.add("sample");
diva.style.border = "2px solid black";
diva.style.backgroundColor = "pink";

container.appendChild(diva);

const heading = document.createElement("h1");
heading.textContent = "I'm in a div";

diva.appendChild(heading);

const divap = document.createElement("p");
divap.textContent = "ME TOO!";

diva.appendChild(divap);
