// Write your JavaScript code here!

// const {validateInput} = require("./scriptHelper");
// const { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch } = require("./scriptHelper");


const valdatedResults = {
  empty: "Empty",
  nan: "Not a Number",
  number: "Is a Number",
};

window.addEventListener("load", function () {
    console.log("Loaded");
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // event.preventDefault();
    console.log("Submit Clicked");
    let readyForLaunch = true;
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    if (
      validateInput(pilotName) != valdatedResults.nan ||
      validateInput(copilotName) != valdatedResults.nan ||
      validateInput(fuelLevel) != valdatedResults.number ||
      validateInput(cargoMass) != valdatedResults.number
    ) {
      readyForLaunch = false;
    }

    console.log(
      "readyForLaunch: " +
        readyForLaunch +
        "\npilotName: " +
        pilotName +
        "\ncopilotName: " +
        copilotName +
        "fuelLevel: " +
        fuelLevel +
        "cargoMass: " +
        cargoMass
    );
    
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
