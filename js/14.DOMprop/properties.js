console.log("document.querySelector(\".container\").innerHTML")
console.log(document.querySelector(".container").innerHTML)
console.log("document.querySelector(\".box2\").innerHTML")
console.log(document.querySelector(".box2").innerHTML)
console.log("document.querySelector(\".container\").textContent")
console.log(document.querySelector(".container").textContent)
console.log("document.querySelector(\".container\").innerText")
console.log(document.querySelector(".container").innerText)
console.log("document.querySelector(\".container\").outerHTML")
console.log(document.querySelector(".container").outerHTML)
console.log("document.querySelector(\".container\").tagName")
console.log(document.querySelector(".container").tagName)
console.log("document.querySelector(\".container\").nodeName")
console.log(document.querySelector(".container").nodeName)
console.log("document.querySelector(\".box1\").hidden")
console.log(document.querySelector(".box1").hidden)
console.log("document.querySelector(\".box2\").innerHTML = \"Hi Henrry\" ")
console.log(document.querySelector(".box2").innerHTML = "Hi Henrry")
console.log("document.querySelector(\".box2\").hasAttribute(\"style\")")
console.log(document.querySelector(".box2").hasAttribute("style"))
console.log("document.querySelector(\".box2\").getAttribute(\"style\")")
console.log(document.querySelector(".box2").getAttribute("style"))
console.log("document.querySelector(\".box2\").setAttribute(\"style\", \"display:inline\")")
console.log(document.querySelector(".box2").setAttribute("style", "display:inline"))
console.log("document.querySelector(\".box3\").removeAttribute(\"style\")")
console.log(document.querySelector(".box3").removeAttribute("style"))
console.log("document.querySelector(\".container\").dataset")
console.log(document.querySelector(".container").dataset)

let div = document.createElement("div");
div.innerHTML = "This is a new div";
div.setAttribute("class", "new-div");
document.querySelector(".container").appendChild(div);

