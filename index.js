/*const Reader = require("./../Refactoring/lib/utils/Reader")

const explorers = Reader.readJsonFile("explorers.json")

console.log(explorers)*/
/*
// Clase anterior con la que obtenemos los explorers
const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./../Refactoring/lib/services/ExplorerService")
const explorers = Reader.readJsonFile("explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));*/

const explorer1 = { name: "Explorer1", score: 1 }
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = { name: "Explorer3", score: 3 }
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = { name: "Explorer5", score: 5 }
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = { name: "Explorer15", score: 15 }
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}