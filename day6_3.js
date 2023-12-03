// write a "person" class to hold all the details

class Person{
    constructor(name,age,qualification,city, state){
        this.name=name;
        this.age=age;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        age:${this.age}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("Saranya Ravi",29,"M.Tech Information Technology","Udupi","Karnataka")
Person1.details()