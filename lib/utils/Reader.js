const fs = require("fs");

class Reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader
console.log("Si funciona!!!")
    //Reader.readJsonFile("explorers.json")