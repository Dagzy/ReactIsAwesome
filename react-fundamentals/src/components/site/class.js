class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        return('Welcome back, ' + this.name)
    }
    status(){
        console.log('Current Status: ' + this.type)
    }
}
export const anonDude = new User('Quincy')
// function anonMethods(name){
//     name.greet()
//     name.status()
// }
// anonMethods(anonDude)

// const anonLady = new User('Heather')
// anonMethods(anonLady)

// const rabes = new User('Rabies')
// anonMethods(rabes)

export default User;
