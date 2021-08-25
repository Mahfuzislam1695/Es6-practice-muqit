class Parent{
    constructor(){
        this.ParentName = "mahfuz"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby1 = new Child("modassir");
const baby2 = new Child("mariam");

console.log(baby1, baby2);