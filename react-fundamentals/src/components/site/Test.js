import User from './class';

class superUser extends User{
    constructor(name, age, gender, glasses ){
        super(name)
        this.age = age;
        this.glasses = glasses;
        this.gender = gender;

    }
}
class extremeUser extends superUser{
    constructor(name, age, gender, glasses, extreme){
        super(name, age, gender, glasses)
        this.extreme = extreme
    }
}
const paul = new extremeUser('paul', 41, 'male', false, true)
const quincy = new superUser('quincy', 35, 'male', true)
const kenn = new extremeUser('kenn', 25, 'male', true, true)
const carolyn = new extremeUser('carolyn', 27, 'female', false, true)
const tom = new superUser('tom', 25, 'male', true)
const Variables = [paul, kenn, carolyn, tom, quincy]

export default Variables;