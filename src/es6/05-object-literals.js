// Enhanced object Literals
function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Roberto', 37, 'EC', 1));

