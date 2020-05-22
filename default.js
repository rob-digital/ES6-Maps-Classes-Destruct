// ####################################################
// 5. default parameters
//
// ####################################################
console.log('-----------------------------------------')

function SmithPerson(firstName1, lastName1 , yearOfBirth1 = 1990, nationality1 = 'spanish') {
    this.firstName = firstName1
    this.lastName = lastName1
    this.yearOfBirth = yearOfBirth1
    this.nationality = nationality1
}

const john = new SmithPerson('John', 'Smith' )
console.log(john)