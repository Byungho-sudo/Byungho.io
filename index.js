function loadNavigation() {
  document.write(`
    <div class="topnav">
      <a class="material-icons" href="../../index.html">home</a>
      <a href="About.html">About</a>
    </div>
  `);
}

// const imgList = document.querySelectorAll("img"); // Use lowercase for variable names and capitalize the "img" tag name

// imgList.forEach((element) => {
//   console.log(element);
//   element.classList.add("card");
// });


// OBS!!! Section "GearTestList" is linked to "Test Site" in "Sorting_Test.html"
// const GearTestList = document.getElementsByName("Gear");
// GearTestList.sort((a, b) => a.id - b.id);
// console.log(GearTestList)
// Trying to sort Gears by id or date of upload, goal is to have a sort by [GEAR NAME] and have the same [NAME] sort by [ID / UPLOAD DATE] where oldest comes last and newest first and hide other [NAME]'s