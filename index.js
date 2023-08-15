var ImgList = document.querySelectorAll("Img")

ImgList.forEach((element) => console.log(element));

ImgList.forEach((element) => element.classList.add("card"));
