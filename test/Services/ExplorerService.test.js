const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para explorer services", () => {
    test("Requerimiento 1: Calcular todos los explorers ", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        expect(explorersInNode.length).toBe(1);
    });


});