/** 
 * Function filterData
 * This function reads the data file and looks for an animal name with the passed argument in it
 * A table is returned at the end of the function
*/


//Import all the data
const fileData = require('../data')

function filterData (args) {
    //Get all the data
    let importedData = fileData.data;

    //Better option : 
    let final = importedData.filter(city => {
        city.people = city.people.filter(people => {
            people.animals = people.animals.filter(animals => {
                return animals.name.toLocaleLowerCase().includes(args[1].toLowerCase())
            });
            return people.animals.length !== 0
        });
        return city.people.length !== 0
    })
    console.dir(final, { depth: null })

}

module.exports = {
    filterData
}