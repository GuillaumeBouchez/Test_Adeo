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
    let final = []

    importedData.forEach(city => {
        city.people.forEach(people => {
            //For every people by city, check if agrs is part of their animal's name
            let found = checkAnimal(people.animals, args[1])
            if (found.length !== 0) {
                let foundBool = false;
                let count = 0;

                //Check every city in the table, and add it in the table if the city name is in the final table
                while (!foundBool && final.length > count) {
                    if (city.name === final[count].name) {
                        foundBool = true
                        break
                    }
                    count++
                }
                //If args is part of an animal name, create a table with the city, the people and the animal
                if (foundBool) {
                    final[count].people.push({ name: people.name, animals: found })
                } else {
                    final.push({ name: city.name, people: [{ name: people.name, animals: found }] })
                }
            }
        })
    })
    if (final.length > 0) {
        console.dir(final, { depth: null })
        return final
    } else {
        console.log("Can't find a name with " + args[1] + " in it.")
    }

}

//Check if the passed args is a part of some animals names
function checkAnimal (animalArray, isInAnimalName) {
    let newAnimalTab = [];
    for (let i of animalArray) {
        if (i.name.toLowerCase().includes(isInAnimalName.toLowerCase())) {
            newAnimalTab.push(i)
        }
    }
    return newAnimalTab
}

module.exports = {
    filterData
}