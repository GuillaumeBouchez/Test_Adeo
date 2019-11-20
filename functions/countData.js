/** 
 * Function countData
 * This function reads the data file and counts all the animals by people, and all people by city
 * A table is returned at the end of the function
*/

//Import all the data
const fileData = require('../data')

function countData () {
    //Get all the data
    let importedData = fileData.data;
    let result = []

    //Create an object with the length of the people table for each city and  the length of the animals table for each people
    importedData.forEach(city => {
        let cityObject = { name: city.name + '[' + city.people.length + ']', people: [] }
        city.people.forEach(people => {
            cityObject.people.push({ name: people.name + '[' + people.animals.length + ']', animals: people.animals })
        })
        // Push the new Object in the tab
        result.push(cityObject)
    })
    console.dir(result, { depth: null })
    return result
}

module.exports = {
    countData
}