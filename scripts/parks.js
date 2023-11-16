const locationDrop = document.querySelector("#locationDrop");
const parkTableDataBody = document.querySelector("#parkTableDataBody");
const locationRadio = document.querySelector("#locationRadio");
const typeRadio = document.querySelector("#typeRadio");
const allRadio = document.querySelector("#allRadio");

function loadStateList() {
  locationDrop.style.display = "block";
  locationDrop.innerHTML = "";
  parkTableDataBody.innerHTML = "";

  let defaultOption = new Option("Select By State...");
  locationDrop.appendChild(defaultOption);

  for (const locationName of locationsArray) {
    let option = document.createElement("option");
    option.value = locationName;
    option.textContent = locationName;
    locationDrop.appendChild(option);
  }
}
function loadParksByType() {
  locationDrop.style.display = "block";
  locationDrop.innerHTML = "";
  parkTableDataBody.innerHTML = "";

  let defaultOption = new Option("Select By Type...");
  locationDrop.appendChild(defaultOption);

  for (const type of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = type;
    option.value = type;
    locationDrop.appendChild(option);
  }
}

function loadParksTable() {
  parkTableDataBody.innerHTML = "";
  for (const park of nationalParksArray) {
  let row = parkTableDataBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;
  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;
  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;
  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;
  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;
  let cell6 = row.insertCell(5);
  cell6.innerText = park.Phone;
  }
}

function createLocationData() {
  parkTableDataBody.innerHTML = "";
  const selectedState = locationDrop.value;
  const selectedType = parkTypesArray.find((type) => selectedState.includes(type));

  for (const park of nationalParksArray) {
    const islandState = selectedState == "Rhode Island" || selectedState == "Virgin Islands";

    if (park.State == selectedState || (park.LocationName.includes(selectedType) && !islandState)) {
      appendParkToTable(park);
    }
  }
}

function appendParkToTable(park) {
  let row = parkTableDataBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;
  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;
  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;
  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;
  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;
  let cell6 = row.insertCell(5);
  cell6.innerText = park.Phone;
  if (park.vist != undefined) {
    var link = document.createElement("a");
    link.href = park.Visit;
    link.innerText = park.LocationName;
    let cell7 = row.insertCell(6);
    cell7.appendChild(link);
  }
}

locationRadio.onclick = loadStateList;
typeRadio.onclick = loadParksByType;

allRadio.onclick = function () {
    locationDrop.style.display = "none";
    loadParksTable();
}

locationDrop.onchange = createLocationData;