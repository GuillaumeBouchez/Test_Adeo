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

    //Better option :
    let result = importedData.map(city => {
        city.name += '[' + city.people.length + ']';
        city.people.map(people => {
            people.name += '[' + people.animals.length + ']';
            return people;
        })
        return city;
    })
    console.dir(result, { depth: null })

}

module.exports = {
    countData
}