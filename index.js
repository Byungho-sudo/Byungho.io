let data = ['Apple V-1', 'Can V-1'];
 
let list = document.getElementById("myList");
 
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})