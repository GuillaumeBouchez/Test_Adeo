const filter = require("./functions/filterData")
const count = require("./functions/countData")

//Get the argument passed by the command line
let args = process.argv.slice(2)[0].split("=");

if (args[0] === '--count') {
    count.countData(args)
    return
}

filter.filterData(args)
