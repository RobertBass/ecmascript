function newUser (name, age, country){
    var name = name || 'Roberto';
    var age = age || 34;
    var country = country || 'EC';
    console.log(name, age, country)
}

newUser();
newUser('Roberto' , 37, 'EC');

function newAdmin(name = 'Roberto', age = 37, country = 'EC'){
    console.log(name, age, country);
}
newAdmin();