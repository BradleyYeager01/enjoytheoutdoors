const mountainDrop = document.querySelector("#mountainDrop");
const infoParagraph = document.querySelector("#infoParagraph");
const effortLevelParagraph = document.querySelector("#effortLevelParagraph");


function loadMountainDrop() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    mountainDrop.appendChild(option);
  }
}

function addImage() {
  const name = mountainDrop.value;
  for (const mountain of mountainsArray) {
    if (mountain.name == name) {
      mountainImageDiv.innerHTML = "";
      //create an image element
      let image = document.createElement("img");

      //set src attribute on the image to the imagefiles path
      path = `images/${mountain.img}`;

      image.src = path;

      //set the alt attribute on the image to the imagefiles description
      image.alt = mountain.name;

      //add image to the div
      mountainImageDiv.appendChild(image);
    }
  }
}

function addMountainInfo() {
    for (const mountain of mountainsArray) {
        const name = mountainDrop.value
        if (mountain.name == name) {
            infoParagraphDiv.innerHTML = "";
            let info = document.createElement("p");

            info.innerText = `${mountain.desc}`;

            let effort = document.createElement("p");

            effort.innerText = `Effort: ${mountain.effort}`

            infoParagraphDiv.append(info, effort);
        }
    }
}

mountainDrop.onclick = addMountainInfo;
mountainDrop.onchange = addImage;
loadMountainDrop();
