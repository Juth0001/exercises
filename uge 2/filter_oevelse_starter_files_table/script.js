const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const btn_eldrevne = document.querySelector("#eldrevne");
const btn_mereEndTo = document.querySelector("#mereEndTo");
const btn_jonas = document.querySelector("#jonas");
const btn_jonasOgEl = document.querySelector("#jonasOgEl");
const btn_rugbrød = document.querySelector("#rugbrod");
const btn_showAll = document.querySelector("#showAll");

btn_eldrevne.addEventListener("click", () => showTheseVehicles(onlyElectricVehicles));
btn_mereEndTo.addEventListener("click", () => showTheseVehicles(twoPassengers));
btn_jonas.addEventListener("click", () => showTheseVehicles(owner));
btn_jonasOgEl.addEventListener("click", () => showTheseVehicles(ownerAndEl));
btn_rugbrød.addEventListener("click", () => showTheseVehicles(twoPandRug));
btn_showAll.addEventListener("click", () => showTheseVehicles(vehicles));


showTheseVehicles(vehicles);


//--
function isElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}


const onlyElectricVehicles = vehicles.filter(isElektrisk);
console.log("onlyElectricVehicles", onlyElectricVehicles);

//showTheseVehicles(onlyElectricVehicles);

//--

function haveTwopassengers(vehicles) {
  if (vehicles.passengers > 2) {
    return true;
  }
}


const twoPassengers = vehicles.filter(haveTwopassengers);
console.log("havetwopassengers", twoPassengers);

//showTheseVehicles(twoPassengers);

//--


function ownedBy(vehicles) {
  if (vehicles.ownedBy === "Jonas") {
    return true;
  }
}


const owner = vehicles.filter(ownedBy);
console.log("ownedByJonas", owner);

//showTheseVehicles(owner);

//--


function ownedByAndEl(vehicles) {
  if (vehicles.ownedBy === "Jonas" && vehicles.isElectric) {
    return true;
  }
}


const ownerAndEl = vehicles.filter(ownedByAndEl);
console.log("ownedByJonas", ownerAndEl);

//showTheseVehicles(ownerAndEl);

//--

function rugTwo(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  }
}


const twoPandRug = vehicles.filter(rugTwo);
console.log("rugbroedAndTwoPassengers", twoPandRug);

//showTheseVehicles(twoPandRug);

//--


function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  let sanitizedStops;
  arr.forEach((each) => {
    // console.log("each.stops", each.stops);
    if (each.stops === undefined) {
      sanitizedStops = " ";
    } else {
      sanitizedStops = each.stops;
    }
    // console.log("each.ownedBy", each.ownedBy);
    let ifOwnedBy;
    if (each.ownedBy === undefined) {
      ifOwnedBy = " ";
    } else {
      ifOwnedBy = each.ownedBy;
    }

    let ifElektrisk;
    if (each.isElectric === undefined) {
      ifElektrisk = " ";
    } else {
      ifElektrisk = "X";
    }

    let ifTandem;
    if (each.isTandem === undefined) {
      ifTandem = " ";
    } else {
      ifTandem = "X";
    }



    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${sanitizedStops}</td>
  <td>${ifOwnedBy}</td>
  <td>${ifElektrisk}</td>
  <td>${ifTandem}</td>
</tr>`;
  });
}


