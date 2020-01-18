const groupAdultsByAgeRange = (people) => {
  return people.reduce((categoryByAge, currentPerson) => {
    if(currentPerson.age >= 18 && currentPerson.age <= 20){
      categoryByAge['20 and younger'] === undefined ? categoryByAge['20 and younger'] = [currentPerson] : categoryByAge['20 and younger'].push(currentPerson)
    }
    if(currentPerson.age > 20 && currentPerson.age <= 30){
      categoryByAge['21-30'] === undefined ? categoryByAge['21-30'] = [currentPerson] : categoryByAge['21-30'].push(currentPerson)
    }
    if(currentPerson.age > 30 && currentPerson.age <= 40){
      categoryByAge['31-40'] === undefined ? categoryByAge['31-40'] = [currentPerson] : categoryByAge['31-40'].push(currentPerson)
    }
    if(currentPerson.age > 40 && currentPerson.age <= 50){
      categoryByAge['41-50'] === undefined ? categoryByAge['41-50'] = [currentPerson] : categoryByAge['41-50'].push(currentPerson)
    }
    if(currentPerson.age > 50){
      categoryByAge['51 and older'] === undefined ? categoryByAge['51 and older'] = [currentPerson] : categoryByAge['51 and older'].push(currentPerson)
    }
    return categoryByAge;
  },{})
}
module.exports = {groupAdultsByAgeRange}