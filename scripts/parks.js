const statesDrop = document.querySelector("#statesDrop");
const parkTableDataBody = document.querySelector("#parkTableDataBody");

function loadStateList() {
  for (const locationName of locationsArray) {
    let option = document.createElement("option");
    option.textContent = locationName;
    statesDrop.appendChild(option);
  }
}


function loadParksTable() {
  for (const park of nationalParksArray) {
    let row = parkTableDataBody.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerText = park.LocationID;
    let cell2 = row.insertCell(1);
    cell2.innerText = park.LocationName;
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

function loadParksByState(State) {
  parkTableDataBody.innerHTML = "";
  for (const park of nationalParksArray) {
    if (park.State == State) {
        let row = parkTableDataBody.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerText = park.LocationID;
        let cell2 = row.insertCell(1);
        cell2.innerText = park.LocationName;
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
}

function stateListChanged() {
  const stateName = statesDrop.value;
  loadParksByState(stateName);
}

loadStateList();
loadParksTable();
statesDrop.onchange = stateListChanged;
