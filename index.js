const imgList = document.querySelectorAll("img"); // Use lowercase for variable names and capitalize the "img" tag name

imgList.forEach((element) => {
  console.log(element);
  element.classList.add("card");
});
