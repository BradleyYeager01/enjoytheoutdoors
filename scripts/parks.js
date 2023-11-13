const parksDrop = document.querySelector("#parksDrop");
const parkTableDataBody = document.querySelector("#parkTableDataBody");

function loadParkList() {
  for (const Park of nationalParksArray) {
    let option = document.createElement("option");
    option.textContent = Park.State;
    parksDrop.appendChild(option);
  }
}

function loadDefaultOption() {
    let option = document.createElement("option");
    option.textContent = "Select...";
    option.value = "";
    activityList.appendChild(option);
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


loadParkList();
loadParksTable();