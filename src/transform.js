const groupAdultsByAgeRange = (Array) => {
  return Array.reduce((categoryByAge, currentPerson) => {
    if(currentPerson.age > 18 && currentPerson.age <= 20){
      categoryByAge['20 and younger'].push(currentPerson)
    }
    if(currentPerson.age > 20 && currentPerson.age <= 30){
      categoryByAge['21-30'].push(currentPerson)
    }
    if(currentPerson.age > 30 && currentPerson.age <= 40){
      categoryByAge['31-40'].push(currentPerson)
    }
    if(currentPerson.age > 40 && currentPerson.age <= 50){
      categoryByAge['41-50'].push(currentPerson)
    }
    if(currentPerson.age > 50){
      categoryByAge['51 and older'].push(currentPerson)
    }
    return categoryByAge;
  },{})
}

module.exports = {groupAdultsByAgeRange}


// - `20 and younger`
//     - `21-30`
//     - `31-40`
//     - `41-50`
//     - `51 and older`

// '20 and younger' : [], '21-30' : [], '31-40' : [], '41-50' : [], '51 and older' : [] 