//TypeError: Bobby is not a function
// function findMatching(drivers, name) {
//     drivers.filter(name)
//         return name
// }


// function findMatching(drivers, name) {
//     for (const match of drivers){
//         if (drivers === name) {
//             return match
//         }
//     }
// }


function findMatching(drivers,name) {
     return drivers.filter(function(member){
        return  name === member || member === name.toLowerCase()
     })
}



function fuzzyMatch(drivers, letterMatch) {
    return drivers.filter(function(firstLetter){
        return firstLetter.startsWith(letterMatch)
    }) 
}




function matchName(drivers, nameMatch) {
    return drivers.filter(function(FullNameMatch) {
        return nameMatch === FullNameMatch.name
    })
}



// function matchName(drivers, cb) {
//     const newNames = []
//     for(const same of drivers) {
//         if (cb(same)){
//             newNames.push(same)
//         }
//     }
//     return newNames
// }