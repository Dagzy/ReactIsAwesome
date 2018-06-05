class User {
    constructor(name, position, salary){
        this.name = name, 
        this.position = position,
        this.salary = salary
    }

}
const quincy = new User('Quincy', 'Instructor', 40000)
const heather = new User('Heather', 'Office Manager', 30000)
const jack = new User('Jack', 'Dog', 0)

let tests = []
tests.push(quincy, heather, jack)
console.log(tests)
export {tests}