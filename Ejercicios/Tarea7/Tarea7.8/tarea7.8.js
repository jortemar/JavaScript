let ul = document.createElement("ul");
ul.id = "ul";
document.body.appendChild(ul);
for (let i = 0; i < 2; i++) {
  let li = document.createElement("li");
  if (i == 0) {
    li.id = "one";
  }else{
    li.id = "two";
    }
  ul.appendChild(li);
  li.innerHTML = i+1;
}
