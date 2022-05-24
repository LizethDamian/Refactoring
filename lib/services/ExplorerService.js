class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const getAmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return getAmountOfExplorersByMission
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        /*const usernames = explorers.map((explorer) => explorer.githubUsername === "node")
        return usernames*/
    }


}

module.exports = ExplorerService